import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;