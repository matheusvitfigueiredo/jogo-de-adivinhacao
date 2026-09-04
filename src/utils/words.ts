export const WORDS = [
    "COMPUTADOR",
    "REACT",
    "QUADRADO",
    "CABELO",
    "CARECA",
    "DESENVOLVIMENTO",
    "FORMAS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "FRONTEND",
    "GIThub",
    "PONTE",
    "chapéu",
    "INTERFACE",
    "BEM-TE-VI",
    "PÁSSARO",
    "voleibol",
    "PROGRAMAÇÃO",
    "CACHORRO",
    "CERCA",
    "GATO",
];

export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
};

