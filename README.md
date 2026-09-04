# Jogo de Adivinhação

Este é um projeto prático de desenvolvimento Frontend: um clássico **Jogo de Adivinhação de Palavras**, desenvolvido com **React** e **TypeScript**.

## Como rodar o projeto

Este projeto foi inicializado com [Vite](https://vitejs.dev/). Siga os passos abaixo para rodar localmente:

1. **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. **Instalar Dependências**:
   Abra o terminal na pasta raiz do projeto (`jogo-de-adivinhacao`) e rode o comando:
   ```bash
   npm install
   ```
3. **Rodar o Servidor de Desenvolvimento**:
   Ainda no terminal, execute:
   ```bash
   npm run dev
   ```
4. **Jogar**: O terminal exibirá um link (geralmente `http://localhost:5173`). Clique nele ou cole no seu navegador para acessar a interface.

---

## 🏗️ Arquitetura e Decisões Técnicas

O projeto foi construído pensando em **escalabilidade**, **manutenibilidade** e **Clean Code**. A principal decisão arquitetural foi separar rigorosamente a Camada Visual (UI) da Camada de Regras de Negócio (Lógica).

### 1. Separação de Responsabilidades (Custom Hooks)
Toda a inteligência do jogo vive isolada no arquivo `src/hooks/useGame.ts`.
- O `App.tsx` não sabe *como* o jogo funciona, ele apenas renderiza a tela com base nas informações que o Hook repassa.

### 2. Componentes de Apresentação (Dumb Components)
Os componentes na pasta `src/components/` (`AttemptCounter`, `GuessInput`, `SecretWord`, etc.) são puramente visuais. 
Eles recebem dados via `props` e apenas desenham na tela. Eles não possuem estados complexos (exceção para o input de digitação que gerencia seu estado local temporário), tornando-os facilmente testáveis e reutilizáveis.

### 3. Tratamento Avançado de Strings
O jogo foi pensado para a língua portuguesa. A função `normalizeWord` (no `useGame.ts`) utiliza a API do JavaScript **(NFD)** para remover acentuações (`Á` -> `A`, `Ç` -> `C`) invisivelmente por debaixo dos panos. Assim, não punimos o usuário caso ele digite uma letra acentuada por engano, mantendo a experiência fluida. O uso de Regex garante que apenas letras de A-Z diminuam o número de tentativas, blindando o jogo contra números ou caracteres especiais.

### 4. Estilização Temática e Responsividade
Os estilos foram aplicados utilizando CSS nativo, organizados na pasta `styles/` perto de seus respectivos componentes.

---