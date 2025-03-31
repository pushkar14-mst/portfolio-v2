import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "./ResumeSection.css";
import resume from "../../assets/resume.png";

interface ResumeSectionProps {
  onClose: () => void;
  isVisible: boolean;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: "-10%" },
  visible: { opacity: 1, scale: 1, y: "0%" },
  exit: { opacity: 0, scale: 0.9, y: "-10%" },
};

const ResumeSection: React.FC<ResumeSectionProps> = ({
  onClose,
  isVisible,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prachi Piyushbhai Jethava_SE_main.docx";
    link.download = "Prachi Piyushbhai Jethava_SE_main.docx";
    link.click();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="resume-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="resume-panel-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="resume-actions">
              <FiDownload onClick={handleDownload} />
              <IoClose onClick={onClose} />
            </div>
            <h3>Resume</h3>
            <div className="resume-image">
              <img src={resume} alt="resume" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeSection;
