import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import me from "../../assets/images/me.jpg";

import "./about.css";

const AppAbout = () => {
  return (
    <section id="about" className="about-block">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Image className="about-img" src={me} alt="Nishanth Moolam" fluid />
          </Col>
          <Col sm={12} md={6} className="summary">
            As a seasoned software engineer with extensive full-stack expertise,
            I bring a passion for crafting innovative solutions and leveraging
            cutting-edge technologies.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppAbout;
