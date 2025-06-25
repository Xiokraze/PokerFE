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

/**
 * FiveCardStudResults component
 *
 * Displays the results of a Five Card Stud poker game.
 * Shows a page header with the results reason, the detailed player results,
 * and a button to play again.
 *
 * Props:
 * - loading: boolean indicating if the play again action is in progress (disables button)
 * - handlePlayAgain: callback function triggered when user clicks "Play Again"
 * - results: API response containing the reason string and array of player results
 */
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
