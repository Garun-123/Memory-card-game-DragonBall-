import {useEffect,useState} from 'react'

function Header({count})
{
    const[highScore,setHighScore]=useState(0);
   
  useEffect(()=> {

        if(count>highScore) setHighScore(count);
        
   },[count])

    return (
        <>
        <div className="Heading">
        <h1>Dragon Ball Memory Game</h1>
        </div>
        <div className="score">
            <div className="present-score">Current Score:{count}</div>
            <div className="highest-score">Highest Score:{highScore}</div> 
        </div>
        </>
    )
    
}

export default Header;