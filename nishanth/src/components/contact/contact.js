import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

import "./contact.css";

const AppContact = () => {
  return (
    <section id="contact" className="contact-block">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Contact Me</h2>
          </Col>
        </Row>

        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Enter your name" />
            </Col>
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Enter your message" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container className="contacts">
        <Row>
          <Col>
            <i className="fab fa-linkedin fa-2xl"></i>
            <p>linkedin.com/in/nishanth-moolam/</p>
          </Col>
          <Col>
            <i className="fas fa-envelope fa-2xl"></i>
            <p>nishanthmoolam97@gmail.com</p>
          </Col>
          <Col>
            <i className="fas fa-phone fa-2xl"></i>
            <p>647-380-8116</p>
          </Col>
          <Col>
            <i className="fas fa-brands fa-github fa-2xl"></i>
            <p>github.com/Nishanth-Moolam</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppContact;
