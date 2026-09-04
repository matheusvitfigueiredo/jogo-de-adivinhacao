import './App.css'

import { useGame } from './hooks/useGame';
import { 
  SecretWord, 
  AttemptCounter, 
  GuessInput, 
  WrongGuesses, 
  AlertsLabel 
} from './components';

function App() {
  const { 
    secretWord, 
    guessedLetters, 
    totalAttempts, 
    handleNewGuess,
    alertMessage,
    isGameOver,
    restartGame
  } = useGame();

  return (
    <main className="app-wrapper">
      <section className='main-container'>
        <h1 className="game-title">Adivinhe a palavra</h1>

        <div className="game-layout">
          <div className="game-left-panel">
            <AttemptCounter totalAttempts={totalAttempts} attemptCounter={guessedLetters.length} />
            <WrongGuesses secretWord={secretWord} guessedLetters={guessedLetters}/>
          </div>
          
          <div className="game-right-panel">
            <SecretWord word={secretWord} guessedLetters={guessedLetters} />
            <div className='game-alert-label'>
                <GuessInput onGuess={handleNewGuess} />
                <AlertsLabel alert={alertMessage} isGameOver={isGameOver} onRestart={restartGame} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
