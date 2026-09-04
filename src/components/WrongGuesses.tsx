import './styles/WrongGuesses.css';

interface WrongGuessesProps {
    secretWord: string,
    guessedLetters: string[]
}

export function WrongGuesses({ secretWord, guessedLetters }: WrongGuessesProps) {
    const wrongLetters = guessedLetters.filter(
        (letter) => !secretWord.includes(letter)
    );

    return (
        <div className="wrong-guesses-container">
            <span className="wrong-guesses-label">erros: </span>
            <span className="wrong-guesses-letters">{wrongLetters.join(' - ')}</span>
        </div>
    )
}