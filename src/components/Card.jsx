import  '../style/Card.css';

function Card({imgdata,onCardClick})
{
    
    return (
        <>
        <div className="card"  onClick={()=>{
        onCardClick(imgdata.id)}} >
            <div className="img" >
                {imgdata?.image? (<img src={imgdata.image} alt={imgdata.name}/>):
                (<p>Loading....</p>)}
           </div>
        <div className="name"><p>{imgdata? imgdata.name:"Loading...."}</p></div>
        </div>
        </>
    )
}

export default Card;