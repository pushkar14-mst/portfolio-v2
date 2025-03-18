import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import HomeSection from "./components/HomeSection/HomeSection";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="main-app-container">
      <Nav />
      <HomeSection />
      <AboutSection />
    </div>
  );
};

export default App;
