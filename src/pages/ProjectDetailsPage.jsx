import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { developers } from '../data/developers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = developers
    .flatMap((dev) => dev.properties)
    .find((prop) => prop.id === parseInt(id))?.details;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-royal-dark flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-royal-dark text-gray-800"
    >
      <Navbar />
      <ProjectDetails project={project} onBack={() => navigate('/')} />
      <Footer />
    </motion.div>
  );
};

export default ProjectDetailsPage;