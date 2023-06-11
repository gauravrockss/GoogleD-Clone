import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Section from "./../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
import Pricecard from "../components/Pricecard";
import plans from "../services/plans";

const Campaigns = () => {
    return (
        <>
            <Hero
                heading="Automation for Marketing Teams"
                content="Go beyond email. Leverage a Complete set of marketing tools (including web, social, email, chat and text) to meet your customers
                        where they are, and meaningfully engage at every stage of the customers lifecycle."
                image="common/templates-desktop.png"
                primaryButton="Try Campaings for Free"
                secondaryButton="Go to Campaings"
            />
            <hr />

            <Section
                heading="Use Workflows and drip Campaigns to save time"
                content="Nurture your leads automatically. Send people through automated workflows
                        based on their unique interests—then drive them to take action."
                primaryButton="Start free trial"
                secondaryButton="Learn more"
                image="common/ads1.svg"
            />

            <Section
                heading="Personalize experiences across channels"
                content="Build relevant experiences right into the fabric of your website and landing pages.
                        Use tags to segment people based on their activity and interests, and follow up in another channel—with even more relevant messaging."
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            <Section
                heading="Deliver free offers and collect contact information"
                content="Capture contact information with high-converting, customizable forms and landing pages. Then, 
                trigger automations that deliver lead magnets and automatically start a nurture sequence."
                image="common/ads3.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
            />
            <Section
                heading="Reach people where they are"
                content="Your audience doesn't just hang around their inbox. Reach them across channels with text message automation, personalized landing pages, and integrations with Facebook and Twitter."
                image="campaigns/campaigns5.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />
            <Section
                heading=" Find your most engaged leads"
                content="Who's most interested in what you have to say? 
                        Lead scoring and engagement tagging makes it easy to find your most qualified leads."
                image="campaigns/campaigns6.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
            />
            {/* price section title */}
            <section>
                <Container>
                    <Row className=" mt-5 text-center my-lg-5 my-5">
                        <Col lg={12}>
                            <h2 style={{ fontSize: "clamp(30px,5vw,40px)" }}>
                                Choose the Plan That’s Right for You
                            </h2>
                            <h5 className="mt-5">
                                How many contacts do you need?
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* price card */}
            <section className="my-5">
                <Container>
                    <Row className="my-5">
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
                heading="Looking for more storage for your personal account?"
                content="clikkle campaigns provides a variety of business tools like smart content to provide the facility to write better content and prevent spam, it also provides you a wide range of ai tools to help you promote your business, while maintaining the security of your information, for small to large varying size businesses"
                logo="campaigns.png"
                link="Clikkle Campaigns"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Campaigns for Free"
                secondaryButton="Go to Campaigns"
            />
        </>
    );
};

export default Campaigns;
