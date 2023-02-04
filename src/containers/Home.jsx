import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Top from "../components/Top";

function Home() {
    const [activeWorkItem, setActiveWorkItem] = useState(1);
    return (
        <>
            {/* Top */}
            <Top />
            {/* About me */}
            <About />

            {/* 02. Where I've worked */}
            <div
                style={{ margin: "70px 0px" }}
                className="row m-0  pt-5 justify-content-center align-items-center"
            >
                <div className="col-8" style={{ margin: "0 auto" }}>
                    {/* Text */}
                    <div
                        className="d-flex align-items-center"
                        style={{ width: "100%" }}
                    >
                        <div className="d-flex align-items-baseline">
                            <span className="text-main pe-2"> 02.</span>{" "}
                            <span className="ff-apple fs-5 fw-bold pe-3">
                                Where I’ve Worked
                            </span>{" "}
                        </div>
                        <span
                            style={{
                                display: "inline-block",
                                borderBottom: "1px solid var(--light-blue)",
                                width: "50%",
                                paddingTop: "5px",
                            }}
                        ></span>
                    </div>
                    <div className="row my-5">
                        <div className="col-3 d-flex flex-column ">
                            {[
                                { n: 1, text: "Upstatement" },
                                { n: 2, text: "Upstatement" },
                                { n: 3, text: "Upstatement" },
                                { n: 4, text: "Upstatement" },
                                { n: 5, text: "Upstatement" },
                            ].map((item) => (
                                <button
                                    className={`btn  workitem py-2 ps-3 ${
                                        activeWorkItem === item.n && "active"
                                    }`}
                                    onClick={() => setActiveWorkItem(item.n)}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                        <div className="col-9">
                            <div className="fs-6 fw-bold pe-3">Engineer</div>{" "}
                            <p
                                className="text-secondary pt-1 "
                                style={{ fontSize: "12px" }}
                            >
                                May 2018 - Present
                            </p>
                            <ul
                                className="skills-menu ff-apple list-unstyled text-secondary"
                                style={{ fontSize: "14px" }}
                            >
                                <li className="pb-2">
                                    Write modern, performant, maintainable code
                                    for a diverse array of client and internal
                                    projects
                                </li>
                                <li className="pb-2">
                                    Work with a variety of different languages,
                                    platforms, frameworks, and content
                                    management systems such as JavaScript,
                                    TypeScript, Gatsby, React, Craft, WordPress,
                                    Prismic, and Netlify
                                </li>
                                <li className="pb-2">
                                    Communicate with multi-disciplinary teams of
                                    engineers, designers, producers, and clients
                                    on a daily basis
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 03. Some things i've built */}
            <div className="py-5">
                <div className="row m-0 ">
                    <div className="col-8">
                        <div
                            className="d-flex align-items-center pb-4"
                            style={{ width: "100%" }}
                        >
                            <div className="d-flex align-items-baseline">
                                <span className="text-main pe-2"> 03.</span>{" "}
                                <span className="ff-apple fs-5 fw-bold pe-3">
                                    Some Things I’ve Built
                                </span>{" "}
                            </div>
                            <span
                                style={{
                                    display: "inline-block",
                                    borderBottom: "1px solid var(--light-blue)",
                                    width: "50%",
                                    paddingTop: "5px",
                                }}
                            ></span>
                        </div>
                    </div>
                </div>
                <div className="row m-0 position-relative mb-5 pb-5 mt-2">
                    <div className="col-6" style={{ zIndex: 0 }}>
                        <img
                            src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif"
                            alt=""
                            width="570"
                            style={{ borderRadius: "5px" }}
                        />
                    </div>
                    <div
                        className="col-6 d-flex flex-column justify-content-center"
                        style={{ zIndex: 1, textAlign: "right" }}
                    >
                        <h6
                            className=" fw-normal text-main"
                            style={{ fontSize: "13px" }}
                        >
                            Featured Project
                        </h6>
                        <h5 className="ff-apple">Halcyon theme</h5>
                        <div
                            className="p-4 ff-apple text-secondary mt-2"
                            style={{
                                textAlign: "right",
                                backgroundColor: "#112240",
                                fontSize: "16px",
                                borderRadius: "5px",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia, culpa? Voluptatem nam corporis
                            soluta, nihil amet maxime nemo, labore quisquam
                            aspernatur vel magnam? Hic dicta eveniet inventore
                            nisi pariatur ipsam?
                        </div>
                        <div
                            className="d-flex justify-content-end align-items-center text-secondary py-3"
                            style={{ fontSize: "14px" }}
                        >
                            <div className="pe-3">Vs Code</div>
                            <div className="pe-3">Sublime Text</div>
                            <div className="pe-3">Atom</div>
                            <div className="pe-3">iTerm2</div>
                            <div className="pe-3">Hyper</div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link to="#" className="pe-3 text-main-hover">
                                <i class="bi bi-github"></i>
                            </Link>
                            <Link to="#" className=" text-main-hover">
                                <i class="bi bi-box-arrow-up-right"></i>{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row m-0 position-relative mb-4 mt-2">
                    <div
                        className="col-6 d-flex flex-column justify-content-center"
                        style={{ zIndex: 1, textAlign: "left" }}
                    >
                        <h6
                            className=" fw-normal text-main"
                            style={{ fontSize: "13px" }}
                        >
                            Featured Project
                        </h6>
                        <h5 className="ff-apple">Halcyon theme</h5>
                        <div
                            className="p-4 ff-apple text-secondary mt-2"
                            style={{
                                backgroundColor: "#112240",
                                fontSize: "16px",
                                borderRadius: "5px",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia, culpa? Voluptatem nam corporis
                            soluta, nihil amet maxime nemo, labore quisquam
                            aspernatur vel magnam? Hic dicta eveniet inventore
                            nisi pariatur ipsam?
                        </div>
                        <div
                            className="d-flex justify-content-start align-items-center text-secondary py-3"
                            style={{ fontSize: "14px" }}
                        >
                            <div className="pe-3">Vs Code</div>
                            <div className="pe-3">Sublime Text</div>
                            <div className="pe-3">Atom</div>
                            <div className="pe-3">iTerm2</div>
                            <div className="pe-3">Hyper</div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <Link to="#" className="pe-3 text-main-hover">
                                <i class="bi bi-github"></i>
                            </Link>
                            <Link to="#" className=" text-main-hover">
                                <i class="bi bi-box-arrow-up-right"></i>{" "}
                            </Link>
                        </div>
                    </div>

                    <div
                        className="col-6 d-flex justify-content-end"
                        style={{ zIndex: 0 }}
                    >
                        <img
                            src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif"
                            alt=""
                            width="570"
                            style={{ borderRadius: "5px" }}
                        />
                    </div>
                </div>
            </div>

            {/* Other Northworthy projects */}
            <div className="text-center" style={{ marginTop: "130px" }}>
                <div className="ff-apple fs-5 fw-bold pe-3">
                    Other Noteworthy Projects
                </div>{" "}
                <Link
                    className="text-main text-main-hover text-underline py-2"
                    style={{ fontSize: "14px" }}
                >
                    view the archive
                </Link>
            </div>

            <div className="row py-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div className="col-4 px-2 py-2">
                        <div
                            style={{
                                background: "var(--blue)",
                                borderRadius: "5px",
                            }}
                            className="px-4 py-4"
                        >
                            <div className="d-flex justify-content-between align-items-center pb-3">
                                <i class="bi bi-folder text-main fs-2"></i>
                                <div>
                                    <Link
                                        to="#"
                                        className="pe-3 text-main-hover"
                                    >
                                        <i class="bi bi-github"></i>
                                    </Link>
                                    <Link to="#" className=" text-main-hover">
                                        <i class="bi bi-box-arrow-up-right"></i>{" "}
                                    </Link>
                                </div>
                            </div>
                            <div style={{ lineHeight: 1.2 }}>
                                <Link
                                    className="ff-apple text-main-hover"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "18px",
                                    }}
                                >
                                    Integrated Algolia Search with Wordpress
                                    Multsite
                                </Link>
                            </div>
                            <p
                                className="text-secondary ff-apple pt-3 "
                                style={{ fontSize: "15px" }}
                            >
                                Building custom multisite compatible WordPress
                                plugin to build global search in Algolia
                            </p>
                            <div
                                className="d-flex align-items-center text-secondary"
                                style={{ fontSize: "13px" }}
                            >
                                <div className="pe-2">Algolia</div>
                                <div className="pe-2">WordPress</div>
                                <div className="pe-2">PHP</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 04. What's next? */}
            <div className="text-center mt-5 col-6 m-auto">
                <Link
                    className="text-main text-main-hover text-underline py-2"
                    style={{ fontSize: "16px" }}
                >
                    04. What's Next?
                </Link>
                <div className="h1 ff-apple my-2">Get In Touch</div>
                <p
                    className="text-secondary ff-apple pt-3 "
                    style={{ fontSize: "16px" }}
                >
                    Although I’m not currently looking for any new
                    opportunities, my inbox is always open. Whether you have a
                    question or just want to say hi, I’ll try my best to get
                    back to you!
                </p>
                <button
                    className="btn btn-outline-main py-3 px-5 my-3 "
                    style={{ fontSize: "16px", letterSpacing: "0" }}
                >
                    Say Hello
                </button>
                <div style={{ marginBottom: "220px" }}></div>
                <p
                    className="text-secondary ff-apple fw-light "
                    style={{
                        fontSize: "14px",
                        wordSpacing: "3px",
                        lineHeight: "2",
                    }}
                >
                    Designed & Built by Batyr Gurbangulyyew <br />
                    <span className="pe-2">
                        <i class="bi bi-star"></i> 5 819
                    </span>{" "}
                    <span>
                        <i class="bi bi-git"></i> 2 742
                    </span>
                </p>
            </div>
        </>
    );
}

export default Home;
