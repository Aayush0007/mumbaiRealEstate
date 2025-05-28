
/* src/pages/Home.jsx */
import { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';

const Hero = lazy(() => import('../components/Hero'));
const Features = lazy(() => import('../components/Features'));
const Properties = lazy(() => import('../components/Properties'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const Home = () => {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <Features />
            <Properties />
            <Testimonials />
            <ContactForm />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Home;