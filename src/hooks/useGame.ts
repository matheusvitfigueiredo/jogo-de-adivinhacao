import { useState } from 'react';
import { getRandomWord } from '../utils/words';

export const normalizeWord = (word: string) => {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

export function useGame() {
  const [secretWord, setSecretWord] = useState(normalizeWord(getRandomWord()));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); 
  const [alertMessage, setAlertMessage] = useState<string>('');
  
  const validLettersLength = secretWord.replace(/[^A-Z]/g, '').length;
  const totalAttempts = validLettersLength * 2;
  
  const uniqueSecretLetters = Array.from(new Set(secretWord.replace(/[^A-Z]/g, '').split('')));
  const isWon = uniqueSecretLetters.length > 0 && uniqueSecretLetters.every(letter => guessedLetters.includes(letter));
  const isLost = !isWon && guessedLetters.length >= totalAttempts;
  const isGameOver = isWon || isLost;

  let finalMessage = alertMessage;
  if (isWon) {
    finalMessage = 'Parabéns! Palavra Adivinhada';
  }
  if (isLost) {
    finalMessage = 'Suas tentativas acabaram!';
  }

  const handleNewGuess = (rawLetter: string) => {
    setAlertMessage('');
    if (isGameOver) {
      return;
    }

    const letter = normalizeWord(rawLetter);
    if (!/^[A-Z]$/.test(letter)) {
      setAlertMessage('Apenas letras são válidas.');
      return;
    }
    if (guessedLetters.includes(letter)) {
      setAlertMessage('Você já chutou essa letra!');
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);
  };

  const restartGame = () => {
    setSecretWord(normalizeWord(getRandomWord()));
    setGuessedLetters([]);
    setAlertMessage('');
  };

  return {
    secretWord,
    guessedLetters,
    totalAttempts,
    handleNewGuess,
    alertMessage: finalMessage,
    isGameOver,
    restartGame
  };
}
