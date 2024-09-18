import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg7 from "../assets/img/project-img7.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id:1,
      title: "My Portfolio Project",
      description: "Development using Reactjs",
      imgUrl: projImg4,
      
    },
    {
      id:2,
      title: "Email verification using firebase and course management project ",
      description: "Development using Angular",
      imgUrl: projImg5,
    },
    {
      id:3,
      title: "Spotify Search Track Project.",
      description: "Development using Reactjs",
      imgUrl: projImg6,
    },
    {
      id:4,
      title: "E-Commerce Add to cart Project",
      description: "Development using Angular",
      imgUrl: projImg7,
    },
    // {
    //   title: "E-commerce-add-to-cart-project",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "spotify-search-track-project",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                <h2>Projects</h2>
                <p>I’ve developed various web applications using React, Angular, Node.js, Firebase, and Redux. With React and Angular, I created dynamic user interfaces and single-page applications. I built server-side logic and RESTful APIs with Node.js and integrated Firebase for real-time data and authentication. My experience with Redux ensured effective state management across complex applications. Below are some of the projects I've worked on, each with a link for further details:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}