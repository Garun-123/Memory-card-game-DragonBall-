import {useEffect,useState} from 'react';
import  '../style/Card.css';

function Card({setCount,num})
{
    const[card,setCard]=useState(false);
    const[imgdata,setImgData]=useState(null);
    
    function checkclick()
    {
        
        if(card===true)
        {
            setCount(0);
            
        }
        else
        {
            setCount(prev=>prev+1);
            setCard(true);
        }
    }

    
    useEffect(()=>{
        const controller=new AbortController();
        fetch(`https://dragonball-api.com/api/characters/${num}`, {
        signal: controller.signal,
                    })
                    .then((res)=>res.json())
                    .then((data)=>setImgData(data))
                    .catch(err=>console.error(err));
        return()=>{
            controller.abort();
        };
    },[num])
    
    return (
        <>
        <div className="card">
            <div className="img" >
       {imgdata?.image? (<img src={imgdata.image} alt={imgdata.name} onClick={()=>{
       checkclick();
       }}/>)
                 :(<p>Loading....</p>)}
           </div>
        <div className="name"><p>{imgdata? imgdata.name:"Loading...."}</p></div>
        </div>
        </>
    )
}

export default Card;