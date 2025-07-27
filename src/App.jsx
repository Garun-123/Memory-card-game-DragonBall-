import { useState } from 'react'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'

function App() {
 let  cards=[];

 for(let i=1;i<=20;i++)
 {
    let obj={id:i,clicked:false};
    cards.push(obj);
 }
  const [count , setCount] = useState(0);
  const [card , setCard]=useState(cards);
  
  return (
    <>
    
     <Header count={count} />
     <div className="mid-section">
       {card.map((item)=>
        (<Card key={item.id} setCount={setCount} num={item.id} clicked={item.clicked} setCard={setCard}/>))
       }
     </div>
     
    </>
  )
}

export default App
