import './styles/AttemptCounter.css';

interface AttemptCounterProps {
    totalAttempts: number;
    attemptCounter: number;
}

export function AttemptCounter({ totalAttempts, attemptCounter }: AttemptCounterProps) {
    const remainingAttempts = totalAttempts - attemptCounter;

    return (
        <div className="attempt-counter-container">
            <span className="attempt-number">{remainingAttempts}</span>
            <div className="attempt-text">
                <span>chutes</span>
                <span>disponíveis</span>
            </div>
        </div>
    );
}