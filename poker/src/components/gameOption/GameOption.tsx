import './GameOption.module.css';
import { useNavigate } from 'react-router-dom';

interface GameOptionProps {
  title: string;
  playable?: boolean;
  path?: string;
}

export default function GameOption({ title, playable = false, path }: GameOptionProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`game-option ${playable ? 'playable' : 'coming-soon'}`}
      onClick={() => playable && path && navigate(path)}
    >
      <div className="game-title">{title}</div>
      {!playable && <div className="coming-soon-label">Coming Soon</div>}
    </div>
  );
}
