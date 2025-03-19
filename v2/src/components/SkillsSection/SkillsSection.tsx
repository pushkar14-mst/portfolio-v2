import "./SkillsSection.css";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaPython,
  FaBrain,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiSqlite,
  SiThealgorithms,
  SiPinetwork,
} from "react-icons/si";

import { useState } from "react";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <h3>What Skills I Have</h3>
      <h2>Skills with Technologies</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>

          <div className="skills__content">
            <article className="skills__details">
              <FaReact id="icon" />
              <div>
                <h4>React</h4>
                <Progress done="80" color="blue" />
              </div>
            </article>

            <article className="skills__details">
              <DiJavascript1 id="icon" />
              <div>
                <h4>Javascript</h4>
                <Progress done="90" color="darkBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiRedux id="icon" />
              <div>
                <h4>Redux</h4>
                <Progress done="65" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <FaBootstrap id="icon" />
              <div>
                <h4>Bootstrap</h4>
                <Progress done="90" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiCss3 id="icon" />
              <div>
                <h4>CSS</h4>
                <Progress done="80" color="singerBlue" />
              </div>
            </article>

            <article className="skills__details">
              <FaHtml5 id="icon" />
              <div>
                <h4>HTML</h4>
                <Progress done="90" color="darkBlue" />
              </div>
            </article>
          </div>
        </div>

        {/* Backend skills */}
        <div className="skills__backend">
          <h3>Backend Development</h3>

          <div className="skills__content">
            <article className="skills__details">
              <FaNodeJs id="icon" />
              <div>
                <h4>Node</h4>
                <Progress done="80" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiExpress id="icon" />
              <div>
                <h4>Express</h4>
                <Progress done="80" color="singerBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiMongodb id="icon" />
              <div>
                <h4>MongoDB</h4>
                <Progress done="70" color="blue" />
              </div>
            </article>

            <article className="skills__details">
              <SiFirebase id="icon" />
              <div>
                <h4>Firebase</h4>
                <Progress done="85" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <FaGitAlt id="icon" />
              <div>
                <h4>Git</h4>
                <Progress done="70" color="singerBlue" />
              </div>
            </article>
          </div>
        </div>
        {/* Data Science skills */}
        <div className="skills__data">
          <h3>Data Science</h3>

          <div className="skills__content">
            <article className="skills__details">
              <FaPython id="icon" />
              <div>
                <h4>Python</h4>
                <Progress done="80" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <FaBrain id="icon" />
              <div>
                <h4>Machine Learning</h4>
                <Progress done="80" color="lightBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiSqlite id="icon" />
              <div>
                <h4>SQL</h4>
                <Progress done="80" color="singerBlue" />
              </div>
            </article>

            <article className="skills__details">
              <SiThealgorithms id="icon" />
              <div>
                <h4>Data Structures</h4>
                <Progress done="70" color="blue" />
              </div>
            </article>

            <article className="skills__details">
              <SiPinetwork id="icon" />
              <div>
                <h4>Networking</h4>
                <Progress done="85" color="lightBlue" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

const Progress: React.FC<{ done: string; color: string }> = ({
  done,
  color,
}) => {
  const [style, setStyle] = useState({});
  let gradient = "";
  let colour = "";

  switch (color) {
    case "blue":
      gradient = `linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)`;
      colour = "#63a4ff";
      break;

    case "darkBlue":
      gradient = `linear-gradient(315deg, #eec0c6 0%, #7ee8fa 34%)`;
      colour = "#eec0c6";
      break;

    case "lightBlue":
      gradient = "linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%)";
      colour = "#52a7c1";
      break;

    case "singerBlue":
      gradient = "linear-gradient(315deg, #bfe299 0%, #66b5f6 74%)";
      colour = "#bfe299";
      break;

    case "steelBlue":
      gradient = "linear-gradient(315deg, #9cdaf8 0%, #98fcbd 74%)";
      colour = "#9cdaf8";
      break;

    default:
      break;
  }

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      backgroundColor: colour,
      backgroundImage: gradient,
    };

    setStyle(newStyle);
  }, 1000);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default SkillsSection;
