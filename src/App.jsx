import { useState } from "react"

// Components
import StartScreen from "./components/StartScreen"
import Card from "./components/Card";
import Header from "./components/Header";

//Utils
import Characters from "./utils/Characters";
import bgImage from './assets/bg.png'; // Adjust the path as needed

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  
  const handleGameStart = () => {
    setIsLoading(!isLoading)
  }
  
  const handleScoreChange = () => {
    setScore(score + 1);
  }

  return (
    <div className={`min-w-screen min-h-screen bg-blue-900 ${isLoading ?  'grid place-items-center' : ''}`}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover', // Adjust to your preference
      backgroundPosition: 'center center', // Adjust to your preference
    }}
    >
      {
        isLoading ? (
          <div className="">
            <StartScreen handleGameStart={handleGameStart}/>
          </div>
        ) :
          <div>
            <Header score={score}/>
            <Card cardCharacters={Characters} cardClick={handleScoreChange}/>
          </div>
      }
    </div>

  )
}

export default App
