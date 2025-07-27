import {useEffect,useState} from 'react';
import  '../style/Card.css';

function Card({setCount,num,setCard})
{
    const[imgdata,setImgData]=useState(null);
    
      function handleCardClick(id) {
    if (clicked === true) {
      setCount(0);
      setCard(prev =>
        prev.map(item => ({ ...item, clicked: false }))
      );
    } else {
      setCount(prev => prev + 1);
      setCard(prev =>
        prev.map(item =>
          item.id === id ? { ...item, clicked: true } : item
        )
      );
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
       handleCardClick(num);      
       }}/>)
                 :(<p>Loading....</p>)}
           </div>
        <div className="name"><p>{imgdata? imgdata.name:"Loading...."}</p></div>
        </div>
        </>
    )
}

export default Card;