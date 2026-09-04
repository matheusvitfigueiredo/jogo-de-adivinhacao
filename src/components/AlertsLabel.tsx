import './styles/AlertsLabel.css';

interface AlertsLabelProps {
    alert: string;
    isGameOver: boolean;
    onRestart: () => void;
}

export function AlertsLabel({ alert, isGameOver, onRestart }: AlertsLabelProps) {
    if (!alert && !isGameOver) {
        return null;
    }
    
    return (
        <div className={`alert-label-container ${isGameOver ? 'game-over' : ''}`}>
            <span>{alert}</span>
            
            {isGameOver && (
                <button className="restart-button" onClick={onRestart}>
                    Recomeçar
                </button>
            )}
        </div>
    );
}