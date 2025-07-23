import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ScrollToTop from './components/common/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

const AppContent = () => {
  const [utmParams, setUtmParams] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
    };
    setUtmParams(params);
  }, [location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home utmParams={utmParams} />} />
      <Route path="/properties/:id" element={<ProjectDetailsPage utmParams={utmParams} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;