import React, { useState } from "react";

function About() {
    const [isHoveredImage, setIsHoveredImage] = useState(false);

    return (
        <div
            style={{
                margin: "100px 0px 70px 0px",
                padding: "30px 20px 30px 20px",
            }}
        >
            <div className="row">
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-baseline">
                            <span className="text-main pe-2"> 01.</span>{" "}
                            <span className="ff-apple fs-5 fw-bold pe-3">
                                About me
                            </span>{" "}
                        </div>
                        <span
                            style={{
                                display: "inline-block",
                                borderBottom: "1px solid var(--secondary)",
                                width: "50%",
                            }}
                        ></span>
                    </div>
                    <p
                        className="text-secondary ff-apple pt-4 pb-2"
                        style={{ fontSize: "16px" }}
                    >
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS! <br /> <br />
                        Fast-forward to today, and I’ve had the privilege of
                        working at an advertising agency, a start-up, a huge
                        corporation, and a student-led design studio. My main
                        focus these days is building accessible, inclusive
                        products and digital experiences at Upstatement for a
                        variety of clients. <br /> <br /> I also recently
                        launched a course that covers everything you need to
                        build a web app with the Spotify API using Node & React.{" "}
                        <br /> <br /> Here are a few technologies I’ve been
                        working with recently:
                    </p>
                    <div
                        className="d-flex justify-content-between align-items-baseline pe-5"
                        style={{ fontSize: "16px" }}
                    >
                        <ul className="skills-menu list-unstyled">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap 5</li>
                        </ul>
                        <ul className="skills-menu list-unstyled">
                            <li>Python</li>
                            <li>Django</li>
                        </ul>
                        <ul className="skills-menu list-unstyled">
                            <li>React Native</li>
                            <li>Android</li>
                            <li>Ios</li>
                        </ul>
                    </div>
                </div>
                <div
                    className="col-6 d-flex position-relative"
                    style={{ padding: "100px" }}
                >
                    <div
                        style={{
                            width: "300px",
                            height: "300px",
                            // position: "absolute",
                            // top: "-20px",
                            // left: "-20px",
                            // filter: "grayscale(100%) contrast(1)",
                            // WebkitFilter:
                            //     "grayscale(100%) contrast(1)",
                            borderRadius: "5px",
                            overflowY: "hidden",
                            zIndex: 2,
                        }}
                        onMouseEnter={() => setIsHoveredImage(true)}
                        onMouseLeave={() => setIsHoveredImage(false)}
                        className="about-image"
                    >
                        <img
                            src="/images/2.jpg"
                            width="300"
                            height="400"
                            alt=""
                            style={{ marginTop: "-40px" }}
                        />
                    </div>
                    <div
                        style={{
                            width: "300px",
                            height: "300px",
                            border: "2px solid var(--primary)",
                            borderRadius: "5px",
                            position: "absolute",
                        }}
                        className={`about-border ${
                            isHoveredImage && "about-active"
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default About;
