/* src/pages/Home.jsx */
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs"; // Import the new component
import Properties from "../components/Properties";
import ContactForm from "../components/ContactForm";
import Popup from "../components/Popup";
import PropertyLocation from "../components/PropertyLocation";

const Home = ({ utmParams }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-dark">
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <Hero />
            <AboutUs /> {/* Add the About Us section */}
            <Properties />
            <PropertyLocation />
            <ContactForm />
            <Popup utmParams={utmParams}/>
          </Suspense>
        </main>
        <Footer />  
      </div>
    </ErrorBoundary>
  );
};

export default Home;