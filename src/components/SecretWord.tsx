import './styles/SecretWord.css';

interface SecretWordProps {
  word: string;
  guessedLetters: string[];
}

export function SecretWord({ word, guessedLetters }: SecretWordProps) {
  const letters = word.split('');

  return (
    <div className="secret-word-container">
      {letters.map((letter, index) => {
        const showBasicCaracter = letter === '-';
        const letterGuessed = showBasicCaracter || guessedLetters.includes(letter.toUpperCase());

        return (
          <div key={index} className={`letter-box ${showBasicCaracter ? 'hyphen-box' : ''}`}>
            {letterGuessed ? letter.toUpperCase() : '*'}
          </div>
        );
      })}
    </div>
  );
}

