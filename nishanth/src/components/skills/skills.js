import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import "./skills.css";

const AppSkills = () => {
  return (
    <section id="skills" className="skills-block">
      <Card className="skills-card">
        <Card.Body>
          <Card.Title>
            <h2 className="section-title">Expertise</h2>
          </Card.Title>
          <Container>
            <Row>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Frontend:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>HTML</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>Javascript</ListGroup.Item>
                    <ListGroup.Item>Typescript</ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Angular</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                    <ListGroup.Item>Material UI</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Backend:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Python</ListGroup.Item>
                    <ListGroup.Item>Java</ListGroup.Item>
                    <ListGroup.Item>Node</ListGroup.Item>
                    <ListGroup.Item>Flask</ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Spring Boot</ListGroup.Item>
                    <ListGroup.Item>Express</ListGroup.Item>
                    <ListGroup.Item>REST</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Database:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>SQL</ListGroup.Item>
                    <ListGroup.Item>MySQL</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                    <ListGroup.Item>DynamoDB</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Cloud:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>AWS S3</ListGroup.Item>
                    <ListGroup.Item>AWS API Gateway</ListGroup.Item>
                    <ListGroup.Item>AWS EC2</ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>AWS ECS</ListGroup.Item>
                    <ListGroup.Item>AWS Lambda</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Version Control:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Git</ListGroup.Item>
                    <ListGroup.Item>Github</ListGroup.Item>
                    <ListGroup.Item>Bitbucket</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Testing:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Karma</ListGroup.Item>
                    <ListGroup.Item>Jasmine</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Methodologies:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>OOP</ListGroup.Item>
                    <ListGroup.Item>Agile</ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Datastructures & Algorithms</ListGroup.Item>
                    <ListGroup.Item>Microservices</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="skills-section">
                  <h2 className="skills-section-title">Other:</h2>
                  <ListGroup horizontal={"md"} className="my-list-group">
                    <ListGroup.Item>Docker</ListGroup.Item>
                    <ListGroup.Item>Linux</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </section>
  );
};

export default AppSkills;
