import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const StartedPart = (props) => {
    const { heading, primaryButton, secondaryButton } = props;
    return (
        <>
            <section className="mt-5 mb-5 ">
                <Container>
                    <Row className="text-center mt-5">
                        <Col lg={12}>
                            <h2
                                className="mt-5"
                                style={{ fontSize: "clamp(20px,5vw,40px)" }}
                            >
                                {heading}
                            </h2>
                            <div className="justify-content-center  d-inline-flex my-5 mb-sm-0 mb-3 flex-md-row vstack ">
                                <div>
                                    <Button size="lg" className="mb-md-0 mb-3 ">
                                        {primaryButton}
                                    </Button>
                                </div>
                                <div className="mx-2">
                                    <Button
                                        variant="outline-primary"
                                        size="lg"
                                        className="p-lg-2 ps-4 pe-4 "
                                    >
                                        {secondaryButton}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default StartedPart;
