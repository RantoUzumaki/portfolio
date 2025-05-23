import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transistion: { duration: 0.1 } }}
      animate={{ opacity: 1, transistion: { duration: 0.1 } }}
      exit={{ opacity: 0, transistion: { duration: 0.1 } }}
    >
      <h1>COntact me</h1>
    </motion.div>
  );
};

export default ContactMe;
