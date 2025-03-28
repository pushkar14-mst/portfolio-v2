import { contactLinks } from "./contact-links";
import "./ContactSection.css";
const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h3>Connect</h3>
      <h2>With Me</h2>
      <div className="contact-section-container">
        {contactLinks.map((link: any) => {
          return (
            <div className="contact-card">
              {link.icon()}
              <a href={link.link} target="_blank">
                <h3>{link.title}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
