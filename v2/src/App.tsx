import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/HomeSection/HomeSection";
import Nav from "./components/Nav/Nav";
import ProjectSection from "./components/ProjectSection/ProjectSection";
// import ResumeSection from "./components/ResumeSection/ResumeSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

const App = () => {
  return (
    <div className="main-app-container">
      <Nav />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      {/* <ResumeSection /> */}
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
