import Tabs from "components/Tab";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transistion: { duration: 0.1 } }}
      animate={{ opacity: 1, transistion: { duration: 0.1 } }}
      exit={{ opacity: 0, transistion: { duration: 0.1 } }}
    >
      <Tabs />
    </motion.div>
  );
};

export default AboutMe;
