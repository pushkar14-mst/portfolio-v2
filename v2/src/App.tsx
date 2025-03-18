import "./App.css";
import HomeSection from "./components/HomeSection/HomeSection";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="main-app-container">
      <Nav />
      <HomeSection />
    </div>
  );
};

export default App;
