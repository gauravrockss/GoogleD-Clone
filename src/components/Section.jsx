import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import Image from "./Image";

const Section = (props) => {
  const {
    content,
    heading,
    image,
    logo = false,
    primaryButton,
    primaryLink = "#link",
    secondaryButton,
    secondaryLink = "#link",
    reverse = false,
  } = props;

  return (
    <section>
      <div className="text-center text-muted mt-5">
        <h6>See what you can do with {heading}</h6>
        <a href={"#" + heading} style={{ color: "black" }}>
          <BsChevronDown />
        </a>
      </div>

      <Row
        style={{ margin: 0, minHeight: "100vh" }}
        className={`text-lg-start ${
          reverse && "flex-row-reverse"
        } align-items-center d-flex align-items-center justify-content-center`}
        id={heading}
      >
        <Col lg={7} xs={12} className="my-5 img">
          <div
            className={
              reverse ? `text-center text-lg-end` : "text-center text-lg-start"
            }
          >
            <Image name={image} className="img-fluid image" />
          </div>
        </Col>
        <Col lg={5} xs={12} className="text-lg-start mt-5">
          <div className="d-flex mb-4 para justify-content-lg-start align-items-center">
            {logo && (
              <Image
                name={`logos/${logo}`}
                className="campaigns img-fluid title logo"
              />
            )}
            <h2
              className="campaigns2 mt-5"
              style={{ fontSize: "clamp(20px,5vw,40px)" }}
            >
              {heading}
            </h2>
          </div>
          <p style={{ color: "#5f6368" }}>{content}</p>
          <Stack
            direction="vertical"
            gap={3}
            // className="flex-md-row justify-content-center"
            className="d-flex justify-content-lg-start justify-content-center flex-md-row flex-column"
          >
            <Button size="lg" href={primaryLink}>
              {primaryButton}
            </Button>

            <Button href={secondaryLink} variant="outline-primary" size="lg">
              {secondaryButton}
            </Button>
          </Stack>
        </Col>
      </Row>
    </section>
  );
};

export default Section;
