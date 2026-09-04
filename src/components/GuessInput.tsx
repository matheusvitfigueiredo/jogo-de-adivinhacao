import { useState } from 'react';
import './styles/GuessInput.css';

interface GuessInputProps {
    onGuess: (letter: string) => void;
}

export function GuessInput({ onGuess }: GuessInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleGuess = () => {
        if (inputValue.trim() === '') return;
        onGuess(inputValue.toUpperCase());
        setInputValue('');
    };

    return (
        <div className="guess-input-container">
            <input
                type="text" 
                maxLength={1}
                placeholder="digite uma letra"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGuess()}
            />
            <button onClick={handleGuess}>ok</button>
        </div>
    );
}