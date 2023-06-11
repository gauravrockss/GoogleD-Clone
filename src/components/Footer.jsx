import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footer" style={{ paddingBlock: "50px" }}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex social-icons">
                                <div>Follow our Blog</div>

                                <a href="#youtube" className="mx-3">
                                    <BsYoutube size={25} />
                                </a>
                                <a href="#twitter" className="mx-3">
                                    <BsTwitter size={25} />
                                </a>
                                <a href="#facebook">
                                    <FaFacebookSquare
                                        size={25}
                                        className="mx-3"
                                    />
                                </a>
                            </div>
                            <div
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                    marginBlock: "32px",
                                }}
                            />
                        </Col>
                        <Row>
                            <Col xs={12} lg={9}>
                                <Row
                                    className="d-flex flex-wrap  justify-content-center"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    <Col xs={12} sm>
                                        <h4>Clikkle</h4>
                                    </Col>

                                    <Col>
                                        <div className="me-2">
                                            About Clikkle
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="me-2">
                                            Clikkle Products
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="me-2">Privacy</div>
                                    </Col>
                                    <Col>
                                        <div className="me-2">Terms</div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} lg={3}>
                                <div className="me-2 ">Help</div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Footer;
