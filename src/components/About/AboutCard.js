import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammed Jasim M C</span> 
            from <span className="purple">Kozhikode, Kerala, India.</span>
            <br />
            I am currently working as a Full Stack Developer at AF Technologies.
            <br />
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and cloud hosting solutions.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and always aim to improve!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammed Jasim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
