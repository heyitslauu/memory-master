import { useState } from "react"

// Components
import StartScreen from "./components/StartScreen"
import Card from "./components/Card";
import Header from "./components/Header";

//Utils
import Characters from "./utils/Characters";
import bgImage from './assets/bg.png'; 


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleGameStart = () => {
    setIsLoading(!isLoading)
    setIsGameOver(false)
  }
  
  const handleScoreChange = (obj) => {
    shuffleCards(Characters)
    if (clickedCards.includes(obj.id)) {
      setIsGameOver(true)
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, obj.id]);
    }
  }

  const resetGame = () => {
    setScore(0);
    setIsGameOver(false)
    setClickedCards([])
  }

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  return (
    <div 
      className={`min-w-screen min-h-screen bg-blue-900 ${isLoading ?  'grid place-items-center' : ''}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
      }}
    >
      {
        isLoading ? (
          <div className="">
            <StartScreen handleGameStart={handleGameStart}/>
          </div>
        ) :
        (
          <div>
            { !isGameOver ? (
              <div>
                <Header score={score}/> 
                <Card cardCharacters={Characters} cardClick={handleScoreChange}/>
              </div>
              ):
              <div className="min-w-screen min-h-screen grid place-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                <div 
                  className="modal min-w-[300px] text-white min-h-[200px] rounded-lg py-4 px-4 flex flex-col items-center justify-center" 
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
                >
                  <div className="text-center">
                    <h4 className="text-5xl font-medium">Oh no!</h4>
                    <h3 className="text-xl font-bold mt-2">You were caught by Evil Morty!</h3>
                  </div>
                  <button 
                    className="mt-4 py-2 px-2 rounded-md bg-yellow-300 text-black outline-none font-medium"
                    onClick={resetGame}
                  >
                    Restart Game
                  </button>
                </div>
                
              </div>
            }
          </div>
        )
      }
    </div>

  )
}

export default App
