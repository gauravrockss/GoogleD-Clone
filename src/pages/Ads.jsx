import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import plans from "../services/plans";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Aboutsection from "../components/Aboutpage";
import StartedPart from "../components/Startedpart";
import Pricecard from "../components/Pricecard";

const Ads = () => {
    return (
        <>
            <Hero
                heading="Revolutionize Your Ads with Clikkle"
                content="Try a cutting-edge, data-driven platform for advertisers looking to reach their target audience. Our tech includes programmatic buying, retargeting, and real-time optimization for maximum ROI. Join the future of advertising with Clikkle."
                image="common/templates-desktop.png"
                primaryButton="Try Clikkle Ads for Free"
                secondaryButton="Go to clikkle Ads"
            />
            <hr />
            {/*  */}
            <Section
                heading="Revolutionize Your Advertising Strategy with Programmatic Buying"
                content="Our main service is programmatic buying, which uses machine learning algorithms to purchase ad inventory in real-time. This ensures ads are shown to the right user at the right time, maximizing the return on investment for our clients."
                primaryButton="Start free trial"
                secondaryButton="Learn more"
                image="common/ads1.svg"
            />

            <Section
                heading="Maximize ROI with Clikkle's Data-Driven Ad Platform"
                content="Clikkle's ad platform uses real-time bidding and machine learning algorithms to deliver the right ad to the right person at the right time.                "
                image="common/ads2.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
                reverse={true}
            />

            <Section
                heading="Boost Conversions with Clikkle's Dynamic Retargeting Technology"
                content="Retargeting technology tracks website visitors and delivers personalized ads to bring them back. It's a powerful way to increase conversions and make the most of your ad spend."
                image="common/ads3.svg"
                primaryButton="Start Free Trial"
                secondaryButton="Learn more"
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
                heading="Looking for a perfect digital marketing service for your needs?"
                content="Clikkle is your go-to solution for comprehensive digital marketing services, including expertly crafted email marketing solution, targeted ads, and reliable web hosting. Our team of professionals utilizes data-driven strategies and advanced optimization techniques to achieve your business goals and maximize your online presence. With Clikkle, you can trust that your brand is in good hands. Explore our services today and experience the difference that Clikkle can make for your business"
                logo="ads.png"
                link="Clikkle Ads"
            />
            <StartedPart
                heading="Ready to get started?"
                primaryButton="Try Clikkle Ads for Free"
                secondaryButton="Go to Clikkle Ads"
            />
        </>
    );
};

export default Ads;
