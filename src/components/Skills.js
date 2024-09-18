import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* <p>fghfgjfgjfgjmfgjmfgcscdxcc</p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>React</h5>
                </div>
                <div className="item">
                 <img src={meter2} alt="image" />
                 <h5>Angular</h5>
                </div>
                <div className="item">
                 <img src={meter3} alt="image" />
                 <h5>Javascript</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>HTML5</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>CSS3</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>Redux</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>Bootstrap</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>TypeScript</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>NodeJs</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>MySql</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>GIT</h5>
                </div>
                <div className="item">
                 <img src={meter1} alt="image" />
                 <h5>Express 
                  js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}/>
    </section>
  );
};
