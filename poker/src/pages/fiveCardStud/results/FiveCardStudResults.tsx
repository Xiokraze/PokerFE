import PokerButton from '../../../components/button/pokerButton/PokerButton';
import PlayingCard from '../../../components/playingCard/PlayingCard';
import { ApiResponse } from '../FiveCardStud';
import styles from './FiveCardStudResults.module.css';

type FiveCardStudResultsProps = {
  loading: boolean;
  handlePlayAgain: () => void;
  results: ApiResponse;
};

const FiveCardStudResults: React.FC<FiveCardStudResultsProps> = ({
  loading,
  handlePlayAgain,
  results,
}) => {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.title}>Results</h2>
      <p className={styles.reason}>{results.reason}</p>

      <div className={styles.playerResults}>
        {results.playerResults.map(({ player, cards, rank, handSummary }) => (
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

      <PokerButton onClick={() => handlePlayAgain()} disabled={loading} text="Play Again" />
    </div>
  );
};

export default FiveCardStudResults;
