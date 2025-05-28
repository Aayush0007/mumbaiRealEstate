
/* src/App.jsx */
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import ScrollToTop from './components/common/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Home />
      </Router>
    </ThemeProvider>
  );
};

export default App;