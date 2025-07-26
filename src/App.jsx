import { useState } from 'react'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'

function App() {
 let  cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const [count , setCount] = useState(0)

  return (
    <>
    
     <Header count={count} />
     <div className="mid-section">
       {cards.map((item)=>
        (<Card key={item} setCount={setCount} num={item}/>))
       }
     </div>
     
    </>
  )
}

export default App
