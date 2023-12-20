import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Fade } from "react-bootstrap";

import "./hero.css";

const heroData = [
  {
    id: 1,
    text: "First slide",
    image: require("../../assets/images/chess1.jpg"),
    description:
      "Chess Game: I created this to challenge myself on Object Oriented Programming Principles. It was also the first of my projects that I hosted on AWS.",
    link: "https://www.google.com",
    disabled: false,
  },
  {
    id: 2,
    text: "Second slide",
    image: require("../../assets/images/language1.jpg"),
    description:
      "Language Learning with Nick: I've always been passionate about language learning, both human and computer. I created this app to help keep track of my progress.",
    link: "https://www.google.com",
    disabled: false,
  },
  {
    id: 3,
    text: "Second slide",
    image: require("../../assets/images/splitit1.jpg"),
    description:
      "SplitIt: An application that allows friend groups to split bills with ease.",
    link: "https://www.google.com",
    disabled: true,
  },
];

const AppHero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    // console.log(selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <section id="projects" className="hero-block">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Fade in={true} key={index} className="fade-transition">
              <Image
                src={
                  index === 0
                    ? require("../../assets/images/chess.jpg")
                    : index === 1
                    ? require("../../assets/images/language.jpg")
                    : require("../../assets/images/splitit.jpg")
                }
                // src={require("../../assets/images/fcool.jpeg")}
                alt="Nishanth Moolam"
                className="hero-img fade-transition"
                fluid
              />
            </Fade>
            <Carousel
              className="carousel"
              activeIndex={index}
              onSelect={handleSelect}
              interval={7000}
            >
              {heroData.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.text}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <h2 className="hero-title">
              {heroData[index].description}
              <br />
              <Button
                disabled={heroData[index].disabled}
                href={heroData[index].link}
              >
                {heroData[index].disabled ? "Coming Soon!" : "Check it out"}
              </Button>
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppHero;
