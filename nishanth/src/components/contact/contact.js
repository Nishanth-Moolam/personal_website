import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const AppContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3cawige",
        "template_4hgycqt",
        form.current,
        "UmE1W2dqsecOpdyh_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-block">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Contact Me</h2>
          </Col>
        </Row>

        <Form ref={form} onSubmit={sendEmail}>
          <Row>
            <Col className="form-field" md={4} sm={12}>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </Col>
            <Col className="form-field" md={4} sm={12}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </Col>
            <Col className="form-field" md={4} sm={12}>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-field">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Button variant="primary" type="submit" value="Send">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container className="contacts">
        <Row>
          <Col md={3} sm={12}>
            <i className="fab fa-linkedin fa-2xl"></i>
            <p>linkedin.com/in/nishanth-moolam/</p>
          </Col>
          <Col md={3} sm={12}>
            <i className="fas fa-envelope fa-2xl"></i>
            <p>nishanthmoolam97@gmail.com</p>
          </Col>
          <Col md={3} sm={12}>
            <i className="fas fa-phone fa-2xl"></i>
            <p>647-380-8116</p>
          </Col>
          <Col md={3} sm={12}>
            <i className="fas fa-brands fa-github fa-2xl"></i>
            <p>github.com/Nishanth-Moolam</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppContact;
