import React from "react";
import "./HomeSection.css";
import avatar from "../../assets/avatar.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const HomePage: React.FC = () => {
  return (
    <section className="home-section">
      <div className="scroll-down">
        <a href="#contact">
          <p>prachi.jethava2001@gmail.com</p>
        </a>
      </div>
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
      <a href="https://www.linkedin.com/in/prachijethava/" target="_blank">
        <BsLinkedin color="#abaff2" />
      </a>
      <a href="https://github.com/prachi1211" target="_blank">
        <FaGithub color="#abaff2" />
      </a>
      <a href="https://twitter.com/PrachiJethava" target="_blank">
        <FiTwitter color="#abaff2" />
      </a>
    </div>
  );
};

export default HomePage;
