import GameOption from '../../components/gameOption/GameOption';
import { PokerChip } from '../../components/pokerChip/PokerChip';
import './Splash.module.css';

export default function SplashPage() {
  return (
    <div className="splash-page">
      <p className="subtitle">Choose your game</p>
      <div className="game-grid">
        <GameOption title="Five Card Stud" playable path="/five-card-stud" />
        <GameOption title="Texas Hold'em" />
        <GameOption title="Omaha" />
        <GameOption title="Razz" />
      </div>
      <PokerChip color="blue" value={5} />
    </div>
  );
}
