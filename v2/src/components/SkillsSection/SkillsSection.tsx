import { skills } from "./skills";
import "./SkillsSection.css";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <h3>My</h3>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill: any, index: number) => (
          <div className="skill" key={index}>
            {skill.icon()}
            <br />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
