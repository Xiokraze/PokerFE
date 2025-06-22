import { Routes, Route } from 'react-router-dom';
import Splash from './pages/splash/Splash';
import FiveCardStudPage from './pages/fiveCardStud/FiveCardStud';
import ProjectLabel from './components/labels/project/ProjectLabel';

function App() {
  return (
    <>
      <ProjectLabel />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/fiveCardStud" element={<FiveCardStudPage />} />
      </Routes>
    </>
  );
}

export default App;
