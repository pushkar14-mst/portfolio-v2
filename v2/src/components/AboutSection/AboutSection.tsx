import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    window.innerWidth
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      id="about"
      className={`${
        windowWidth < 768 ? "about-section-mobile" : "about-section"
      }`}
    >
      <h3>Get To Know</h3>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="abt_content">
          <p>
            I am student pursuing Master's degree in Computer Science at Indiana
            University Bloomington.As an lead intern at Women Who Code, I
            collaborate on generating innovative tech ideas and work on exciting
            new projects. I also lead workshops on a range of technologies,
            including SQL, Python, Netwroking tips, Data Structures, and more ,
            empowering others to advance their technical and networking skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
