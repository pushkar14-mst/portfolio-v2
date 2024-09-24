import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; // Import the Twitter X icon

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer d-flex justify-content-end align-items-end"
      style={{ height: "100px" }}
    >
      {" "}
      {/* Added flex utilities */}
      <Row>
        <Col className="text-end">
          {" "}
          {/* Align the icons to the extreme right */}
          <ul
            className="footer-icons"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
          >
            <li
              className="social-icons"
              style={{ display: "inline-block", marginLeft: "10px" }}
            >
              <a
                href="https://github.com/prachi1211"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li
              className="social-icons"
              style={{ display: "inline-block", marginLeft: "10px" }}
            >
              <a
                href="https://twitter.com/PrachiJethava"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill /> {/* Adding the Twitter X icon */}
              </a>
            </li>
            <li
              className="social-icons"
              style={{ display: "inline-block", marginLeft: "10px" }}
            >
              <a
                href="https://www.linkedin.com/in/prachijethava/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
