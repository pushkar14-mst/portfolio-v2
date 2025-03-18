import React from "react";
import "./HomeSection.css";
import avatar from "../../assets/avatar.png";
import { INavBarProps, INavBar } from "../../types/types";
const navItems: INavBar[] = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Experience",
    link: "#",
  },
  {
    name: "Skills",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },

  {
    name: "Contact",
    link: "#",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className="home-section">
      <div className="main-title">
        <div className="memoji">
          <img src={avatar} />
          <h1>
            👋, I am{" "}
            <span
              style={{
                color: "#BFD6EA",
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
      <div className="nav-area">
        <NavBar navItems={navItems} />
      </div>
    </section>
  );
};

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  return (
    <div className="nav-bar">
      <ul>
        {props.navItems.map((item) => (
          <li className="nav-item">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
