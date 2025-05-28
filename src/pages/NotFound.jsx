
/* src/pages/NotFound.jsx */
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light text-dark">
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Button href="#home">Back to Home</Button>
    </div>
  );
};

export default NotFound;
