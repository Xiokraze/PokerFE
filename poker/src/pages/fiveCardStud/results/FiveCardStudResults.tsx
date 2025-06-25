import PokerButton from '../../../components/button/pokerButton/PokerButton';
import GameResult from '../../../components/containers/gameResult/GameResult';
import PageHeader from '../../../components/labels/pageHeader/PageHeader';
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
      <PageHeader title="Results" subtitle={results.reason} />
      <GameResult playerResults={results.playerResults} />
      <PokerButton onClick={() => handlePlayAgain()} disabled={loading} text="Play Again" />
    </div>
  );
};

export default FiveCardStudResults;
