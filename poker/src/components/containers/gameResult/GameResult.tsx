import { PlayerResult } from '../../../pages/fiveCardStud/FiveCardStud';
import PlayingCard from '../../playingCard/PlayingCard';
import styles from './GameResult.module.css';

type GameResultProps = {
  playerResults: PlayerResult[];
};

const GameResult: React.FC<GameResultProps> = ({ playerResults }) => {
  return (
    <div className={styles.playerResults}>
      {playerResults.map(({ player, cards, rank, handSummary }) => (
        <div key={player} className={styles.playerCard}>
          <h3 className={styles.playerName}>{player}</h3>
          <p className={styles.handSummary}>
            <span className={styles.rank}>{rank}</span> — {handSummary}
          </p>
          <div className={styles.cardRow}>
            {cards.map((card) => (
              <PlayingCard key={card} code={card} width={80} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameResult;
