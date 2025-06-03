import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Properties from "../components/Properties";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-royal-dark text-gray-800">
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <Hero />
            <Features />
            <Properties />
            <ContactForm />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
