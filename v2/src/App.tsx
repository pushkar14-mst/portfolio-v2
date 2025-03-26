import AboutSection from "./components/AboutSection/AboutSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import HomeSection from "./components/HomeSection/HomeSection";
import Nav from "./components/Nav/Nav";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

const App = () => {
  return (
    <div className="main-app-container">
      <Nav />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
};

export default App;
