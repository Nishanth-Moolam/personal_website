import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./work.css";

const experience = [
  {
    id: 1,
    company: "Company Name",
    title: "Job Title",
    description: "Job Description",
    image: require("../../assets/images/fsquash.jpeg"),
  },
  {
    id: 2,
    company: "Company Name",
    title: "Job Title",
    description: "Job Description",
    image: require("../../assets/images/f1.jpeg"),
  },
  {
    id: 3,
    company: "Company Name",
    title: "Job Title",
    description: "Job Description",
    image: require("../../assets/images/fcool.jpeg"),
  },
  {
    id: 4,
    company: "Company Name",
    title: "Job Title",
    description: "Job Description",
    image: require("../../assets/images/fsquash.jpeg"),
  },
];

const AppWork = () => {
  return (
    <section id="work" className="work-block">
      <Container fluid>
        <h2 className="section-title">My Work Experience</h2>
        <Row>
          {experience.map((job) => (
            <Col md={3} sm={3} key={job.id}>
              <Image src={job.image} alt={job.title} fluid />
              <h3>{job.company}</h3>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AppWork;
