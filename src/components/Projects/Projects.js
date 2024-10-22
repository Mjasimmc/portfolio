import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import careerHarbor from "../../Assets/Projects/suicide.png"; // Add the image for Career Harbor
import youtubeClone from "../../Assets/Projects/suicide.png"; // Add the image for YouTube clone
import personalWebsite from "../../Assets/Projects/suicide.png"; // Add the image for Personal Website
import userManagement from "../../Assets/Projects/suicide.png"; // Add the image for User Management System
import ecommerceApp from "../../Assets/Projects/suicide.png"; // Add the image for E-commerce app
import todoList from "../../Assets/Projects/suicide.png"; // Add the image for Todo List
import netflixClone from "../../Assets/Projects/suicide.png"; // Add the image for Netflix clone

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project Journey <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, showcasing my skills and the technologies I've utilized.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-2.jpg"}
              isBlog={false}
              title="YouTube Clone"
              description="Cloned the YouTube platform using HTML and CSS. Focused on replicating the layout, styling, and responsive design to mimic the original user interface. Implemented key features like video thumbnails, channel listings, and a responsive navigation menu, enhancing my skills in front-end development and design principles."
              ghLink="https://github.com/soumyajit4419/youtube-clone"
              demoLink="https://youtube-clone.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-3.jpg"}
              isBlog={false}
              title="Personal Website"
              description="Developed a personal portfolio website using HTML, CSS, and Bootstrap, showcasing my skills and projects. Integrated an email system for direct contact and inquiries, allowing potential clients and employers to reach me easily. Focused on creating a user-friendly interface and a responsive layout that adapts to different devices."
              ghLink="https://github.com/soumyajit4419/personal-website"
              demoLink="https://personal-website.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-2.jpg"}
              isBlog={false}
              title="User Management System"
              description="Built a comprehensive user management system utilizing Express and Handlebars (HBS). This application allows administrators to manage user profiles, permissions, and roles efficiently. Implemented features like user authentication, session management, and a dynamic dashboard for easy navigation and data handling."
              ghLink="https://github.com/soumyajit4419/user-management-system"
              demoLink="https://user-management.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-3.jpg"}
              isBlog={false}
              title="E-commerce Application"
              description="Created a fully functional e-commerce application using Express and EJS, integrated with Socket.io for real-time features such as notifications and chat support. The application allows users to browse products, add items to their cart, and manage orders efficiently. Focused on enhancing the user experience with a clean, modern design, and fast performance."
              ghLink="https://github.com/soumyajit4419/ecommerce-app"
              demoLink="https://ecommerce.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-2.jpg"}
              isBlog={false}
              title="Todo List"
              description="Developed a dynamic Todo List application using React to help users manage their tasks efficiently. Implemented features such as adding, editing, and deleting tasks, as well as marking them as complete. Utilized React hooks for state management, enhancing my skills in building interactive user interfaces."
              ghLink="https://github.com/soumyajit4419/todo-list"
              demoLink="https://todo-list.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-3.jpg"}
              isBlog={false}
              title="Netflix Clone"
              description="Built a Netflix clone using React, integrating the TMDB API to display movie trailers and information. This project enhanced my skills in API integration and state management with Redux. Designed a responsive user interface to ensure an optimal viewing experience across all devices."
              ghLink="https://github.com/soumyajit4419/netflix-clone"
              demoLink="https://netflix-clone.example.com" // Replace with the actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"/images/image-2.jpg"}
              isBlog={false}
              title="Career Harbor"
              description="A dynamic web application for job seekers, developed using React and Express.js. Features a robust user profile system that allows job seekers to create and manage their profiles and track job applications. Integrated real-time chat functionality using Socket.io to facilitate communication between job seekers and employers, enhancing the recruitment process."
              ghLink="https://github.com/soumyajit4419/career-harbor"
              demoLink="https://career-harbor.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
