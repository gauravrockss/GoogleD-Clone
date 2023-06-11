import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Image from "./../components/Image";
import SidebarLinks from "./../services/sidebarLinks";

import Section from "./../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
const Clikkle = () => {
    return (
        <>
            <Hero
                heading="AI technologies empowering your brand"
                content="AI-powered solutions deliver unparalleled performance and efficiency, helping businesses transform their operations with our state-of-the-art technology"
                image="homepage.png"
                primaryButton="Explore our services now"
                secondaryButton="Our story"
            />
            <hr />
            {/*  */}
            <Section
                heading="Clikkle Campaigns"
                content="Welcome to clikkle! We specialize in crafting
                        data-driven campaigns that deliver real results.
                        From collecting your audience to targeting and
                        optimization, we provide end-to-end solution to
                        help your business succeed. Trust us to elevate
                        your brand with our expertise in digital
                        marketing"
                logo="campaigns.png"
                image="cymbal.jpg"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
            />

            <Section
                heading="Clikkle Ads"
                content="Maximize your reach and drive conversions with
                        Clikkle's expert ads services. Our team creates
                        and manages campaigns across all major
                        platforms, utilizing advanced targeting and
                        optimization techniques to achieve your business
                        goals. Get started today and see the difference
                        our proven strategies can make for your brand."
                logo="ads.png"
                image="gmail.png"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
                reverse={true}
            />

            <Section
                heading="Clikkle Host"
                content=" Trust Clikkle for reliable, scalable web hosting
                        solutions that power your online presence. Our
                        optimized infrastructure ensures maximum uptime
                        and lightning-fast performance, while our expert
                        support team is always here to assist you.
                        Choose Clikkle for a seamless web hosting
                        experience."
                logo="host.png"
                image="gmail.png"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
            />
            <Section
                heading="Clikkle E-Sign"
                content="Our e-signature services make it easy to send
                        and sign agreements, request and track
                        signatures, create custom templates and
                        automated workflows, and sign and manage
                        documents on-the-go with our mobile app. Enjoy
                        robust security features and real-time
                        collaboration with your team."
                logo="e-sign.png"
                image="esign.jpg"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
                reverse={true}
            />
            <Section
                heading="C-Mail"
                content="C-Mail is a secure and reliable email-like web
                        service that allows users to send and receive
                        messages, attachments, and organize their inbox.
                        With easy-to-use features and robust privacy
                        settings, C-Mail is a great choice for all your
                        communication needs"
                logo="cmail.png"
                image="cmail.jpg"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
            />
            <Section
                heading="Clikkle Files"
                content=" Welcome to Clikkle - the secure and reliable
                        cloud-based file storage service. Our intuitive
                        interface and advanced encryption technology
                        ensure easy file management and flexible sharing
                        options, accessible from any device."
                logo="files.png"
                image="cmail.jpg"
                primaryButton="Start Free Trial"
                secondaryButton="Help"
                reverse={true}
            />
            {/* table */}
            <section className="mt-xs-5 mt-5">
                <Container>
                    <Row className="text-center mt-5">
                        <Col lf={12}>
                            <div className="table-title mt-5">
                                <h2
                                    style={{ fontSize: "clamp(30px,5vw,40px)" }}
                                >
                                    Find the plan that's right for you
                                </h2>
                                <p className="my-3 mt-xs-5">
                                    Clikkle Campaigns is a part of Clikkle
                                    Workspace
                                </p>
                                <p>Every plan includes</p>
                            </div>
                            <div className="all-logo d-flex justify-content-center flex-wrap">
                                {SidebarLinks.map((link) => (
                                    <div class="logo-1">
                                        <a href="#link">
                                            <Image name={link.image} />
                                        </a>
                                        <p>{link.name}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5 mb-5">
                <Container>
                    <Table responsive bordered className="text-center table">
                        <thead>
                            <tr>
                                <td>
                                    <div className="px-5 pb-5 pt-5 text-center">
                                        <p className="my-5 ">Products</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-center">
                                        <p className="pb-5">
                                            For Personal (no cost)
                                        </p>
                                        <Button
                                            variant="outline-primary  mb-5"
                                            size="lg"
                                        >
                                            Go to Campaigns
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-center">
                                        <p className="pb-5">
                                            Business Standard
                                        </p>
                                        <Button
                                            variant="primary  mb-5"
                                            size="lg"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col1">
                                    Drive Secure cloud storage
                                </td>
                                <td>15 GB per user</td>
                                <td>2 TB per user</td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Target audience sharing
                                </td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Shared drives for your team
                                </td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Clikkle Docs, Sheets, Slides, Forms content
                                    creation
                                </td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Clikkle Cmail Secure email
                                </td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">Custom business email</td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Clikkle Meet Meet Video and voice
                                    conferencing
                                </td>
                                <td>100 participants</td>
                                <td>150 participants</td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Meeting recordings saved to Drive
                                </td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Security administrations Admin Centralized
                                    administration
                                </td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">
                                    Group-based security policy controls
                                </td>
                                <td>----</td>
                                <td>
                                    <AiOutlineCheck />
                                </td>
                            </tr>
                            <tr>
                                <td className="col1">Customer support</td>
                                <td>
                                    Self-service online and community forums
                                </td>
                                <td>
                                    24/7 online support and community forums
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>
            {/* table end */}
            <Aboutsection
                heading="Looking for a perfect digital marketing service for your needs?"
                content="Clikkle is your go-to solution for comprehensive digital marketing services, including expertly crafted email marketing solution, targeted ads, and reliable web hosting. Our team of professionals utilizes data-driven strategies and advanced optimization techniques to achieve your business goals and maximize your online presence. With Clikkle, you can trust that your brand is in good hands. Explore our services today and experience the difference that Clikkle can make for your business"
                logo="clikkle.png"
                link="Clikkle"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Clikkle Hive"
                secondaryButton="Go to Hive"
            />
        </>
    );
};

export default Clikkle;
