import { useEffect,useState } from 'react'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'


function App() {
const initialCards = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  clicked: false
}));

const [count , setCount] = useState(0);
const [cards, setCards] = useState([]);
const [loading, setLoading] = useState(true);

   useEffect(() => {
    Promise.all(
      Array.from({ length: 20 }, (_, i) =>
        fetch(`https://dragonball-api.com/api/characters/${i + 1}`).then(res => res.json())
      )
    )
      .then(data => {
        const initialized = data.map((char, i) => ({
          ...char,
          id: i + 1,
          clicked: false,
        }));
        setCards(initialized);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

function handleCardClick(id) {
  setCards(prevCards => {
    const currentCard = prevCards.find(card => card.id === id);

    if (currentCard.clicked) {
      setCount(0);
      return prevCards.map(card => ({ ...card, clicked: false }));
    } else {
      setCount(prev => prev + 1);
      return prevCards.map(card =>
        card.id === id ? { ...card, clicked: true } : card
      );
    }
  });
}
  return (
    <>
    
     <Header count={count} />
     <div className="mid-section">
       {loading ? <p>Loading...</p> :
        cards.map((item)=>
        (<Card key={item.id} imgdata={item} onCardClick={handleCardClick}/>))
       }
     </div>
     
    </>
  )
}

export default App
