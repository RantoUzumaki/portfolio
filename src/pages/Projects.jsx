import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transistion: { duration: 0.1 } }}
      animate={{ opacity: 1, transistion: { duration: 0.1 } }}
      exit={{ opacity: 0, transistion: { duration: 0.1 } }}
    >
      <h1>projects</h1>
    </motion.div>
  );
};

export default Projects;
