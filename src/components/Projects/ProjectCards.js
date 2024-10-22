import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // Import the CSS for custom styles

function ProjectCards(props) {
  return (
    <Card className="project-card-view shadow">
      <div className="image-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img" />
        <div className="overlay">
          <Card.Title className="overlay-title">{props.title}</Card.Title>
        </div>
      </div>
      <Card.Body className="text-center">
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        <div className="button-group">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="secondary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
