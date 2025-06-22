import GameOption from '../../components/gameOption/GameOption';
import './Splash.module.css';

export default function SplashPage() {
  return (
    <div className="splash-page">
      <h1>Poker Royale</h1>
      <p className="subtitle">Choose your game</p>
      <div className="game-grid">
        <GameOption title="Five Card Stud" playable path="/five-card-stud" />
        <GameOption title="Texas Hold'em" />
        <GameOption title="Omaha" />
        <GameOption title="Razz" />
      </div>
    </div>
  );
}
