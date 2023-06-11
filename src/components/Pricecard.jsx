import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";

const Pricecard = (props) => {
    const {
        title,
        subtitle,
        offer,
        price,
        benefit,
        time,
        features,
        email,
        sticker = false,
    } = props;
    return (
        <Card className="price-card mb-md-0 mb-2">
            {sticker && <div className="sticker">{sticker}</div>}
            <div className="text-center" style={{ minHeight: "220px" }}>
                <h3 className="">{title}</h3>
                <p
                    className="mt-4"
                    style={{
                        fontSize: "15px",
                        fontWeight: "300",
                    }}
                >
                    {subtitle}
                </p>
                <span
                    className="pb-2"
                    style={{
                        fontSize: "30px",
                        display: "block",
                    }}
                >
                    {price}
                    <small
                        style={{
                            fontSize: "13px",
                            fontWeight: "600",
                        }}
                    >
                        {" "}
                        {time}
                    </small>
                </span>
                <p style={{ fontSize: "14px" }} className="my-2">
                    {offer}
                </p>
            </div>

            <div className="text-center" style={{ minHeight: "100px" }}>
                <Button
                    style={{
                        width: "100%",
                        marginBlock: "15px",
                    }}
                >
                    Sign up for free
                </Button>
                <div
                    style={{
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                >
                    {email}
                </div>
            </div>
            <div
                className="text-left pt-5"
                style={{
                    lineHeight: "1",
                    minHeight: "220px",
                }}
            >
                <div
                    style={{
                        lineHeight: "2.4",
                        paddingLeft: "5px",
                    }}
                >
                    <p
                        className="ps-4 m-0"
                        style={{
                            fontSize: "13px",
                        }}
                    >
                        {benefit}
                    </p>{" "}
                </div>

                <div
                    style={{
                        lineHeight: "1.2",
                    }}
                >
                    {features?.map((feature) => (
                        <p style={{ fontSize: "13px" }} key={feature}>
                            <span>
                                <BsCheckLg
                                    size={20}
                                    style={{
                                        color: "blue",
                                    }}
                                />
                            </span>{" "}
                            {feature}
                        </p>
                    ))}
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="mt-5" style={{ fontSize: "14px" }}>
                    question
                </p>
                <p className="m-0">
                    <a href="#contact" className="pt-0">
                        Contact Us
                    </a>
                </p>
            </div>
        </Card>
    );
};

export default Pricecard;
