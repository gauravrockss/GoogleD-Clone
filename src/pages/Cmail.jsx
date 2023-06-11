import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import plans from '../services/plans';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Aboutsection from '../components/Aboutpage';
import StartedPart from '../components/Startedpart';
import Pricecard from '../components/Pricecard';

const Cmail = () => {
    return (
        <>
            <Hero
                heading='Secure Your Communication with C-Mail'
                content='C-Mail is a cutting-edge, web-based email service that offers advanced features for secure message transmission, organization, and collaboration, utilizing the latest technologies to enhance your communication experience.'
                image='common/templates-desktop.png'
                primaryButton='Try C-Mail for Free'
                secondaryButton='Go to C-Mail'
            />
            <hr />
            {/*  */}
            <Section
                heading='Secure and Advanced Email with C-Mail'
                content='C-Mail is a web-based email service that utilizes state-of-the-art encryption protocols to ensure secure message transmission. It also offers advanced features for email organization, collaboration, and management for businesses and individuals.'
                primaryButton='Start free trial'
                secondaryButton='Learn more'
                image='common/ads1.svg'
            />

            <Section
                heading='Efficient Collaboration with C-Mail.'
                content='our service is a file-sharing and collaboration tool that allows teams to securely exchange files and work on them in real-time. With robust version control and permissions settings, C-Mail makes collaboration efficient and secure.'
                image='common/ads2.svg'
                primaryButton='Start Free Trial'
                secondaryButton='Learn more'
                reverse={true}
            />

            <Section
                heading='Enhance Your App with C-Mail API'
                content="Versatile API that offers secure messaging and file-sharing capabilities for developers to incorporate into their own applications. our API makes it easy to create custom integrations and enhance your software's functionality with C-Mail."
                image='common/ads3.svg'
                primaryButton='Start Free Trial'
                secondaryButton='Learn more'
            />

            <Section
                heading='Secure Access with C-Mail Identity'
                content='Cloud-based identity management solution that offers user authentication and authorization for C-Mail and other applications. With advanced security features like multi-factor authentication and single sign-on.'
                image='common/ads2.svg'
                primaryButton='Start Free Trial'
                secondaryButton='Learn more'
                reverse={true}
            />

            {/* price card */}
            <section>
                <Container>
                    <Row>
                        {plans.map(price => (
                            <Col lg={3} sm={6} className='p-1'>
                                <Pricecard
                                    title={price.title}
                                    subtitle={price.subtitle}
                                    offer={price.offer}
                                    price={price.price}
                                    benefit={price.benefit}
                                    features={price.features}
                                    email={price.email}
                                    time={price.time}
                                    sticker={price.sticker}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* table end */}
            <Aboutsection
                heading='The Secure and Advanced Solution for Modern Communication and Collaboration'
                content="C-Mail is a cutting-edge email and collaboration platform that offers a range of secure and powerful services, file-sharing, and identity management. Designed for businesses and individuals, C-Mail's suite of advanced features and top-of-the-line security make it a top choice for modern communication and collaboration needs."
                logo='cmail.png'
                link='C-Mail'
            />
            <StartedPart
                heading='Ready to get started?'
                primaryButton='Try C-Mail for Free'
                secondaryButton='Go to C-Mail'
            />
        </>
    );
};

export default Cmail;
