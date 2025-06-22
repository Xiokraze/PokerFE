import { Routes, Route } from 'react-router-dom';
import Splash from './pages/splash/Splash';
import FiveCardStudPage from './pages/fiveCardStud/FiveCardStud';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/five-card-stud" element={<FiveCardStudPage />} />
    </Routes>
  );
}

export default App;
