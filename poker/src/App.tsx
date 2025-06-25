import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/splash/Splash';
import FiveCardStud from './pages/fiveCardStud/FiveCardStud';
import ProjectLabel from './components/labels/project/ProjectLabel';
import FooterTicker from './components/footerTicker/FooterTicker';

/**
 * App component
 *
 * Root of the React application handling routing and common layout elements.
 *
 * Structure:
 * - Displays the ProjectLabel component at the top for branding/navigation
 * - Defines routes using React Router v6:
 *   - "/" renders the Splash page (main landing page)
 *   - "/five-card-stud" renders the FiveCardStud game page
 *   - Any unknown route redirects to "/" (Splash page) using Navigate
 * - Displays FooterTicker component at the bottom of every page
 *
 * This setup ensures a single page app experience with route-based content swapping
 * while maintaining consistent header and footer UI.
 */
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
