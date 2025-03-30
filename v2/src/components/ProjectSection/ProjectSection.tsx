import { FaGithub } from "react-icons/fa6";
import "./ProjectSection.css";
import { Project, projects } from "./projects";

const ProjectSection = () => {
  return (
    <section className="projects-section-container" id="projects">
      <h3 id="project-heading">Projects</h3>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imgPath,
  ghLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
        <div className="project-card-buttons">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="git-button"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="project-card-image">
        <img src={imgPath} alt={title} />
      </div>
    </div>
  );
};

export default ProjectSection;
