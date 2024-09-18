import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <Col > */}
            {/* <img src={logo} alt="Logo" /> */}
          {/* </Col> */}
          <Col  className="text-center ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayesha-nadaf-401474219/" target="_blank"> <img src={navIcon1} /> </a>
              <a href="https://github.com/AyeshaNadaf9" target="_blank"> <img src={navIcon2} /> </a>
              <a href=""> <img src={navIcon3} /> </a>
            </div>
            <p>CopyRight 2022. All rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
