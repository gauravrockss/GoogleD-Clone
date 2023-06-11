import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import plans from "../services/plans";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
import Pricecard from "../components/Pricecard";

const files = () => {
    return (
        <>
            <Hero
                heading="Secure,Reliable, Efficient: Clikkle Delivers."
                content="Clikkle is a robust and secure cloud-based file storage service, offering easy-to-use file management, flexible sharing options, and multiple device access, all backed by advanced encryption and two-factor authentication."
                image="common/templates-desktop.png"
                primaryButton="Try clikkle files for free"
                secondaryButton="Go to Clikkle E-sign"
            />
            <hr />
            {/*  */}
            <Section
                heading="Secure File Storage with Clikkle."
                content="Clikkle's advanced encryption technology provides a secure and reliable platform for storing and sharing your files, giving you peace of mind knowing that your data is safe from unauthorized access and breaches."
                primaryButton="Start free trial"
                secondaryButton="Learn more"
                image="common/ads1.svg"
            />

            <Section
                heading="Flexible Storage Plans with Clikkle."
                content="Clikkle's customizable storage plans cater to all your file storage needs, whether you need a small amount of storage for personal use or a large amount of storage for your business, with flexible pricing options.                "
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            <Section
                heading="Efficient File Management with us"
                content="Clikkle's intuitive interface and efficient file management features allow you to easily upload, organize, and share your files, saving you time and effort in managing your digital life."
                image="common/ads3.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
            />

            <Section
                heading="Double the Security with Clikkle's Two-Factor Authentication."
                content="Clikkle offers two-factor authentication for an added layer of security, giving you peace of mind knowing that only authorized users have access to your files, protecting your sensitive data from unauthorized access and cyber threats."
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            {/* price card */}
            <section className="my-5 ">
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
                heading="Revolutionize Your File Storage Experience Today!"
                content="In today's fast-paced digital world, having a secure and efficient file storage solution is essential. With Clikkle, you can experience seamless file management, flexible sharing options, and advanced encryption, all backed by two-factor authentication. Protect your digital life and unleash your full potential with Clikkle today."
                logo="files.png"
                link="Clikkle Files"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Clikkle Files for Free"
                secondaryButton="Go to Clikkle Files"
            />
        </>
    );
};

export default files;
