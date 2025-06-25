import { PlayerResult } from '../../../pages/fiveCardStud/FiveCardStud';
import PlayingCard from '../../playingCard/PlayingCard';
import styles from './GameResult.module.css';

type GameResultProps = {
  playerResults: PlayerResult[];
};

/**
 * GameResult component
 * Displays a list of players with their poker hand details including name, rank, hand summary, and playing cards.
 */
const GameResult: React.FC<GameResultProps> = ({ playerResults }) => {
  return (
    <div className={styles.playerResults}>
      {playerResults.map(({ player, cards, rank, handSummary }, playerIndex) => (
        <div key={playerIndex} className={styles.playerCard}>
          <h3 className={styles.playerName}>{player}</h3>
          <p className={styles.handSummary}>
            <span className={styles.rank}>{rank}</span> — {handSummary}
          </p>
          <div className={styles.cardRow}>
            {cards.map((card, cardIndex) => (
              <PlayingCard key={cardIndex} code={card} width={80} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameResult;
