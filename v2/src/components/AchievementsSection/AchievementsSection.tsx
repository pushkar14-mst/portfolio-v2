import React from "react";

import { motion } from "framer-motion";
import "./AchievementsSection.css";

const AchievementsSection: React.FC = () => {
  return (
    <section className="achievements-section" id="achievement">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>🚀</span> Achievements & Insights
      </motion.h2>

      <motion.div
        className="charts-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="certification-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="cert-title">🎓 Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google"
              />
              <div>
                <strong>Crash Course on Python</strong>
                <p>Google · Issued Jan 2023</p>
              </div>
            </div>

            <div className="cert-card">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Cloud"
              />
              <div>
                <strong>Google Cloud GenAI</strong>
                <p>
                  <a href="https://google.com" target="_blank">
                    Show Credential ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="leadership-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="lead-title">🧑‍💼 Leadership & Campus Roles</h3>
          <div className="lead-grid">
            <div className="lead-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/1200px-Indiana_Hoosiers_logo.svg.png"
                alt="IU"
              />
              <div>
                <strong>Adobe Event Coordinator</strong>
                <p>Indiana University · Aug 2024 – Present</p>
              </div>
            </div>

            <div className="lead-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/1200px-Indiana_Hoosiers_logo.svg.png"
                alt="IU"
              />
              <div>
                <strong>Adobe Student Ambassador</strong>
                <p>Indiana University · Apr 2024 – Present</p>
                <a href="https://adobe.ly/IndianaLink" target="_blank">
                  Learn more ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-domains"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="domains-title">🧠 Project Domains Explored</h3>
          <div className="domain-tags">
            <span>🔍 AI / Machine Learning</span>
            <span>📊 Data Visualization</span>
            <span>🕸 Web Development</span>
            <span>☁️ Cloud & DevOps</span>
            <span>🔒 Cybersecurity</span>
            <span>🧩 System Design</span>
            <span>🎯 Product Thinking</span>
            <span>🤝 Collaboration / Agile</span>
          </div>
        </motion.div>
        <motion.div
          className="achievement-list"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="achievement-title">
            🏅 Hackathons & Community Impact
          </h3>
          <ul className="achievement-grid">
            <li>🌩 Earned Google Cloud GenAI Badge through hands-on labs</li>
            <li>🏆 Top 3% in IBM Hack Challenge (National Level)</li>
            <li>🧠 Finalist – Neural Hack 2.0 by Virtusa</li>
            <li>🌐 Lead – Women Tech Community CEWiT, IIT Madras</li>
            <li>📣 Speaker – Panel discussion on Women in Tech at campus</li>
          </ul>
        </motion.div>{" "}
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
