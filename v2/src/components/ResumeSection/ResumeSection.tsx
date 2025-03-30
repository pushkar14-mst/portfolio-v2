import { FiDownload } from "react-icons/fi";
import "./ResumeSection.css";
import resume from "../../assets/resume.png";
const ResumeSection: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prachi Piyushbhai Jethava_SE_main.docx";
    link.download = "Prachi Piyushbhai Jethava_SE_main.docx";
    link.click();
  };
  return (
    <section className="resume-section" id="resume">
      <h3>My</h3>
      <h2>Resume</h2>
      <div className="resume-image">
        <img src={resume} alt="resume" />
      </div>
      <button className="download-btn" onClick={handleDownload}>
        Download <FiDownload />
      </button>
    </section>
  );
};

export default ResumeSection;
