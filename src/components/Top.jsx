import React from "react";
import { Link } from "react-router-dom";

function Top() {
    return (
        <div style={{ padding: "50px 20px 30px 20px" }}>
            <h6 className=" fw-normal text-main" style={{ fontSize: "16px" }}>
                Hi, my name is
            </h6>
            <h1 className="fw-bold ff-apple display-2">Batyr Gurbangulyyew.</h1>
            <h1 className="text-secondary ff-apple display-3 fw-bold">
                I build things for the web.
            </h1>
            <p
                style={{
                    fontSize: "16px",
                    width: "50%",
                    lineHeight: 1.8,
                }}
                className="ff-apple mt-4 text-secondary"
            >
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at{" "}
                <Link className="text-main text-main-hover text-underline">
                    Upstatement.
                </Link>
            </p>
            <button
                className="btn btn-outline-main px-4 py-3 my-3"
                style={{ fontSize: "13px" }}
            >
                Check out my course!
            </button>
        </div>
    );
}

export default Top;
