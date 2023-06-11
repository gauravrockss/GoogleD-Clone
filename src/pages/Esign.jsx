import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import plans from "../services/plans";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
import Pricecard from "../components/Pricecard";

const Esign = () => {
    return (
        <>
            <Hero
                heading="Power Up Your Document Workflow"
                content="Transform your document workflow with our easy-to-use e-signature platform. Enjoy simplified signing for all users, robust audit trails for enhanced accountability, and ironclad security that keeps your most important documents safe."
                image="common/templates-desktop.png"
                primaryButton="Try clikkle E-sign for free"
                secondaryButton="Go to Clikkle E-sign"
            />
            <hr />
            {/*  */}
            <Section
                heading="Secure, Effortless e-Signatures Anywhere"
                content="Our secure e-signature solution simplifies document signing, offering comprehensive audit trails and bank-level encryption to safeguard document access, review, and signatures."
                primaryButton="Start free trial"
                secondaryButton="Learn more"
                image="common/ads1.svg"
            />

            <Section
                heading="Streamline Signature Requests with Ease"
                content="Request and track signatures on any document with our powerful e-signature management platform. Get instant notifications and reminders, and enjoy seamless integration with your favorite productivity tools for maximum efficiency."
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            <Section
                heading="Custom Templates, Automated Workflows"
                content="Create and customize document templates with ease using our intuitive e-signature platform. Set up automated workflows for faster processing, and collaborate with team members in real-time to speed up approvals and increase productivity."
                image="common/ads3.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
            />

            <Section
                heading="Secure Access with C-Mail Identity"
                content="Cloud-based identity management solution that offers user authentication and authorization for C-Mail and other applications. With advanced security features like multi-factor authentication and single sign-on."
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
                heading="Streamlining Document Workflows with Secure E-Signature Services                "
                content="our e-signature services empower you to streamline your document workflows, accelerate signing processes, and collaborate more effectively with your team. With advanced security features and comprehensive audit trails, you can sign and manage documents with confidence, anywhere, anytime. Transform your workflow and simplify your document management today"
                logo="e-sign.png"
                link="Clikkle E-Sign"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Clikkle E-Sign for Free"
                secondaryButton="Go to Clikkle E-Sign"
            />
        </>
    );
};

export default Esign;
