import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Rectangle from "../images/rectangle.png";
import Shinydocs from "../images/shinydocsBanner.png";
import ReactPlayer from "react-player";
import "../styles/Tunely.css";

function Projects() {
  return (
    <div className="div-projects">
      <Row>
        <div className="projectheader">Shinydocs:</div>
        <div className="slogan">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-end Software Developer")
                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Image src={Shinydocs} className="img-top"></Image>
      </Row>
      <br></br>
      <div className="paragraph">
        <b className="summary-quicktab">💼 Role(s):</b> Front-end Developer
        <br></br>
        <b className="summary-quicktab">🛠️ Languages and Tools:</b> React JS,
        TypeScript
        <br></br>
        <b className="summary-quicktab">🗓️ Timeline:</b> September - December
        2021
      </div>
      <br></br>
      <div className="paragraph">
        From September to December of 2021, I completed an internship at
        Shinydocs as a Front-end Software Developer. I primarily worked on
        building, testing, and documenting an accessible UI Library that was
        used across all company platforms.
      </div>
      <div className="subheading">The UI Library</div>
      <div className="paragraph">
        Prior to working with Shinydocs, I had experience working with external
        libraries such as React Bootstrap or Material UI, when developing
        platforms. However, what I didn’t realize was the amount of effort that
        goes into the development of such libraries that allow developers to
        seamlessly build. I developed fully accessible components including a
        treeview, dropzone, tabs, and more from scratch using React and
        Typescript.
      </div>
      <div className="subheading">The Treeview</div>

      <div className="paragraph">Key Features</div>
      <div className="paragraph">
        <ul>
          <li>
            Arrow key functionality allows accessible navigation through
            component
          </li>
          <li>
            Customizable styling including a choice between folder and chevron
            icons
          </li>
          <li>Dark and light mode styling</li>
          <li>
            Users can input a nested array of data and the component will
            display accordingly
          </li>
          <li>
            Functionality and accessibility tests added as per the WAI-ARIA
            requirements
          </li>
        </ul>
        <br />
        Among all of the components I worked on, I was most proud of the
        treeview as it not only challenged my technological abilities but gave
        me the opportunity to apply theoretical concepts such as DFS to a
        real-life use case.
      </div>
      <Row>
        <a href="/splitpeas" className="prev">
          <Col>Previous Project</Col>
        </a>

        <a href="/habbit" className="next">
          <Col>Next Project</Col>
        </a>
      </Row>
    </div>
  );
}

export default Projects;