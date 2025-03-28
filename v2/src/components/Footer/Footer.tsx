import "./Footer.css";
import footerBg from "../../assets/vect_asset_bg_2.png";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Prachi
        </p>
        <p>&copy; 2025 All rights reserved</p>
        <img src={footerBg} />
      </div>
    </footer>
  );
};

export default Footer;
