import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/splash/Splash';
import FiveCardStud from './pages/fiveCardStud/FiveCardStud';
import ProjectLabel from './components/labels/project/ProjectLabel';
import FooterTicker from './components/footerTicker/FooterTicker';

function App() {
  return (
    <>
      <ProjectLabel />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/five-card-stud" element={<FiveCardStud />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FooterTicker />
    </>
  );
}

export default App;
