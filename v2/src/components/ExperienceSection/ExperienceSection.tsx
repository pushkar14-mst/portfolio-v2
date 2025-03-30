import React from "react";
import "./ExperienceSection.css";
import { experiences } from "./experiences";
import { IExperience } from "../../types";

interface IExperienceProps {
  job: IExperience;
}
const ExperienceSection: React.FC = () => {
  return (
    <>
      <section id="experience" className="experience-section">
        <h3>My</h3>
        <h2>Experience</h2>
        <div className="timeline">
          <ul>
            {experiences.map((job: any, index: number) => (
              <ExperienceList key={index} job={job} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;

const ExperienceList: React.FC<IExperienceProps> = (props) => {
  return (
    <>
      <li>
        <div className="content">
          <h3>
            {props.job.title}
            {""}
            {props.job.company}
          </h3>
          <p>{props.job.description}</p>
        </div>
        <div className="time">
          <h4>{props.job.date}</h4>
        </div>
      </li>
    </>
  );
};
