import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import Image from "./Image";

const Hero = (props) => {
  const { heading, content, image, primaryButton, secondaryButton } = props;

  return (
    <>
      <section className="p-lg-0 p-4 hero">
        <Row
          className=" d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col lg={6} xs={12}>
            <h1 style={{ fontSize: "clamp(30px,5vw,60px)" }}>{heading}</h1>
            <p className="py-4" style={{ color: "#5f6368" }}>
              {content}
            </p>
            <Stack
              direction="vertical"
              gap={4}
              // className="flex-md-row justify-content-center"
              className="d-flex justify-content-lg-start justify-content-center flex-md-row flex-column me-2"
            >
              <Button variant="primary section-button" className="">
                {primaryButton}
              </Button>

              <Button variant="outline-primary section-button">
                {secondaryButton}
              </Button>
            </Stack>
            <div className="d-flex my-4  justify-content-lg-start justify-content-center flex-wrap">
              <p>Don't have an account? </p>
              <a href="#signup" className="text-primary mx-3">
                Sign up at no cost
              </a>
            </div>
          </Col>

          <Col lg={6} xs={12} className="pt-5">
            <Image name={image} className="logo img-fluid" />
          </Col>
        </Row>
        {/* </Container> */}
      </section>
    </>
  );
};

export default Hero;
