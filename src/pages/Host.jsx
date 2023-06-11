import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import plans from "../services/plans";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
import Pricecard from "../components/Pricecard";

const Host = () => {
    return (
        <>
            <Hero
                heading="Experience High-Performance Hosting"
                content="Our cutting-edge hosting infrastructure, powered by advanced security and robust scalability features, ensures optimal performance for your website, backed by our expert support team and reliable uptime guarantees.                "
                image="common/templates-desktop.png"
                primaryButton="Try clikkle Host for free"
                secondaryButton="Go to Clikkle Host"
            />
            <hr />
            {/*  */}
            <Section
                heading="Secure Your Website from DDoS Attacks with Our Advanced Protection."
                content="Our advanced DDoS protection and WAF safeguard your website against malicious attacks and hacking attempts, while our daily backups ensure the safety and integrity of your data."
                primaryButton="Start free trial"
                secondaryButton="Learn more"
                image="common/ads1.svg"
            />

            <Section
                heading="Effortless Website Management with cPanel Control Panel."
                content="Clikkle's Control Panel offers an intuitive interface and advanced tools for seamless website management, optimized hosting environment configuration, and expert technical support."
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            {/* price card */}
            <section className="my-5">
                <Container>
                    <Row>
                        {plans.map((price) => (
                            <Col lg={3} sm={6} className="p-1 my-5">
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
                heading="Scalable Hosting Solutions for Growing Websites."
                content="NVMe SSD Storage Technology for Lightning-Fast Performance. Advanced DDoS Protection and WAF for Robust Website Security. Scalable Resources for Flexible and Cost-Efficient Hosting. 99.9% Uptime Guarantee for Continuous Website Availability. Expert Technical Support for Hassle-Free Website Management."
                logo="host.png"
                link="Clikkle Host"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Clikkle Host for Free"
                secondaryButton="Go to Clikkle Host"
            />
        </>
    );
};

export default Host;
