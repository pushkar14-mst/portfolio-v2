import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/prachi_formal_final.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            {" "}
            {/* Centering content */}
            <Col
              md={7}
              xs={12} // Full-width column on small screens
              className="home-header"
              style={{ paddingLeft: "20px", paddingTop: "-100px" }}
            >
              <h1
                style={{
                  paddingTop: "0px",
                  paddingBottom: "10px",
                  marginBottom: "20px",
                }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: "15px" }}>
                I'M
                <strong className="main-name"> PRACHI JETHAVA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={5}
              xs={12} // Full-width column on small screens
              className="d-flex justify-content-center" // Center image on small screens
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="Prachi's formal pic"
                className="img-fluid"
                style={{
                  maxHeight: "500px",
                  borderRadius: "20%",
                  marginTop: "-60px",
                  marginLeft: "0px", // Removed left margin for better small screen experience
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
