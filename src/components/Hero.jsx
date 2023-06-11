import React from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import Image from './Image';

const Hero = props => {
    const { heading, content, image, primaryButton, secondaryButton } = props;

    return (
        <>
            <section className='mt-lg-4 hero'>
                {/* <Container> */}
                <Row className='text-lg-start text-center mx-3 mx-sm-0 mt-lg-3 mt-5'>
                    <Col lg={5} md={12}>
                        <h1 style={{ fontSize: 'clamp(30px,5vw,60px)' }}>
                            {heading}
                        </h1>
                        <p className='py-4' style={{ color: '#5f6368' }}>
                            {content}
                        </p>
                        <div
                            direction='vertical'
                            gap={5}
                            // className="flex-md-row justify-content-center"
                            className='d-inline-flex justify-content-center flex-md-row me-2'>
                            <Button variant='primary section-button'>
                                {primaryButton}
                            </Button>

                            <Button variant='outline-primary section-button'>
                                {secondaryButton}
                            </Button>
                        </div>
                        <div className='d-flex my-4  justify-content-lg-start justify-content-center flex-wrap'>
                            <p>Don't have an account? </p>
                            <a href='#signup' className='text-primary mx-3'>
                                Sign up at no cost
                            </a>
                        </div>
                    </Col>

                    <Col lg={7} md={12} className='pt-5'>
                        <Image name={image} className='logo img-fluid' />
                    </Col>
                </Row>
                {/* </Container> */}
            </section>
        </>
    );
};

export default Hero;
