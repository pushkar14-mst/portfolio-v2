import React from "react";
import "./HomeSection.css";
import avatar from "../../assets/avatar.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const HomePage: React.FC = () => {
  return (
    <section className="home-section">
      <a href="#contact" className="scroll-down">
        Scroll Down
      </a>
      <div className="main-title">
        <div className="memoji">
          <img src={avatar} />
          <h1>
            👋, I am{" "}
            <span
              style={{
                color: "#abaff2",
              }}
            >
              Prachi
            </span>
          </h1>
        </div>
        <div className="title">
          <h1>
            Software
            <br />
            Developer
          </h1>
        </div>
      </div>

      <SocialMedia />
    </section>
  );
};

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/manohar19" target="_blank">
        <BsLinkedin color="#abaff2" />
      </a>
      <a href="https://github.com/manohar-19" target="_blank">
        <FaGithub color="#abaff2" />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiMail color="#abaff2" />
      </a>
    </div>
  );
};

export default HomePage;
