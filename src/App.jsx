import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ScrollToTop from './components/common/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import usePageTracking from "./UsePageTracking";

// AppRoutes now contains routing + tracking logic
const AppRoutes = () => {
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/:id" element={<ProjectDetailsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
