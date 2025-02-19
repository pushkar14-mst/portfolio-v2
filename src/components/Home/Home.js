// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/file.png";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row className="justify-content-center">
//             {" "}
//             {/* Centering content */}
//             <Col
//               md={7}
//               xs={12} // Full-width column on small screens
//               className="home-header"
//               style={{ paddingLeft: "20px", paddingTop: "-100px" }}
//             >
//               <h1
//                 style={{
//                   paddingTop: "0px",
//                   paddingBottom: "10px",
//                   marginBottom: "20px",
//                 }}
//                 className="heading"
//               >
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name" style={{ marginBottom: "15px" }}>
//                 I'M
//                 <strong className="main-name"> PRACHI JETHAVA</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>
//             <Col
//               md={5}
//               xs={12} // Full-width column on small screens
//               className="d-flex justify-content-center" // Center image on small screens
//               style={{ paddingBottom: 20 }}
//             >
//               <img
//                 src={homeLogo}
//                 alt="Prachi's formal pic"
//                 className="img-fluid"
//                 style={{
//                   maxHeight: "500px",
//                   borderRadius: "20%",
//                   marginTop: "-60px",
//                   marginLeft: "0px", // Removed left margin for better small screen experience
//                 }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/file.png"; // Update with actual image path
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
            {/* Text Section */}
            <Col
              md={7}
              xs={12}
              className="home-header"
              style={{
                paddingLeft: "20px",
                paddingTop: "0px", // Default for larger screens
                ...(window.innerWidth < 768
                  ? { paddingLeft: "10px", textAlign: "center" } // Adjust for mobile
                  : {}),
              }}
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

              <div
                style={{
                  padding: window.innerWidth < 768 ? "20px" : "50px",
                  textAlign: window.innerWidth < 768 ? "center" : "left",
                }}
              >
                <Type />
              </div>
            </Col>

            {/* Image Section */}
            <Col
              md={5}
              xs={12}
              className="d-flex justify-content-center align-items-center"
              style={{
                paddingBottom: 20,
                ...(window.innerWidth < 768 ? { marginTop: "20px" } : {}),
              }}
            >
              <img
                src={homeLogo}
                alt="Prachi's formal pic"
                className="img-fluid"
                style={{
                  maxHeight: window.innerWidth < 768 ? "300px" : "500px", // Adjust image height for smaller screens
                  borderRadius: "20%",
                  marginTop: window.innerWidth < 768 ? "0px" : "-60px", // Reset margin for smaller screens
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
