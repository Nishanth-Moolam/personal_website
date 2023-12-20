import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

import "./finance.css";

const AppFinance = () => {
  // a page that will give information on youtube channel and personal finance
  return (
    <Container fluid className="finance">
      <Row>
        <Col>
          {/* back button */}
          <Button variant="primary" type="submit">
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Back
            </Link>
          </Button>

          <h2 className="section-title">Finance</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="section-title">Youtube Channel</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="section-title">Personal Finance</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default AppFinance;
