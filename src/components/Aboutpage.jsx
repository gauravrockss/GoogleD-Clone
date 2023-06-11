import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "./Image";

const Aboutsection = (props) => {
    const { heading, content, logo, link } = props;

    return (
        <>
            <section>
                <Container>
                    <Row className="text-center justify-content-center">
                        <Col lg={12}>
                            <div className="my-5">
                                <h3>{heading}</h3>
                            </div>
                            <div className="para">
                                <Image name={`logos/${logo}`} />
                            </div>
                            <div className="my-5 btpara">
                                <p>{content}</p>
                            </div>
                            <div className="mb-5">
                                <a href="#learn">Learn more about {link}</a>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </section>
        </>
    );
};

export default Aboutsection;
