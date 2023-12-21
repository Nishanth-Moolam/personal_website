import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useRef, useState } from "react";

import "./contact.css";

const AppContact = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const template_params = {};
    for (let [key, value] of formData.entries()) {
      template_params[key] = value;
    }

    console.log({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: template_params,
    });

    fetch("https://d27lvf89yc.execute-api.us-east-1.amazonaws.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: template_params.name,
        email: template_params.email,
        phone: template_params.phone,
        message: template_params.message,
      }),
    })
      .then((response) => {
        form.current.reset(); // Clear the form
        setStatus("Message sent!"); // Set the status to a success message
      })
      .then((data) => console.log(data))
      .catch((error) => {
        setStatus("Message failed to send.");
        console.error(error);
      });
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
        <p>{status}</p>
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
