import React, { useState } from 'react'
import BestLowDiceRoll from './components/BestLowDiceRoll';
import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  return (
    <div>
      <BestLowDiceRoll 
        gameStarted={gameStarted}
        gameEnded={gameEnded}
        setGameStarted={setGameStarted}
        setGameEnded={setGameEnded}
      />
      </div>
  )
}

export default App;