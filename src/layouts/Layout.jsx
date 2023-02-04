import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Layout(props) {
    return (
        <>
            <Header />
            <div className="row m-0 px-3">
                <div className="col-1 position-relative">
                    <div
                        className="position-fixed"
                        style={{ paddingTop: "300px" }}
                    >
                        <div className="my-3">
                            <Link to="#" className="px-3 text-main-hover">
                                <i class="bi bi-github"></i>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="#" className="px-3 text-main-hover">
                                <i class="bi bi-instagram"></i>
                            </Link>
                        </div>
                        <div className="my-3">
                            <Link to="#" className="px-3 text-main-hover">
                                <i class="bi bi-linkedin"></i>
                            </Link>
                        </div>
                        <div
                            style={{
                                borderLeft: "1px solid #ccd6f6",
                                height: "500px",
                                margin: "0px 0px 0px 28px",
                            }}
                        ></div>
                    </div>
                </div>

                <div className="col-10">{props.children}</div>

                <div className="col-1 position-relative">
                    <div
                        className="position-fixed"
                        style={{ paddingTop: "260px" }}
                    >
                        <div className="my-3">
                            <Link
                                to="#"
                                className="px-3 text-main-hover moving-mail-on-hover"
                                style={{
                                    textOrientation: "mixed",
                                    writingMode: "vertical-lr",
                                    fontSize: "13px",
                                }}
                            >
                                batyrupwork@gmai.com
                            </Link>
                        </div>

                        <div
                            style={{
                                borderLeft: "1px solid #ccd6f6",
                                height: "500px",
                                margin: "0px 0px 0px 28px",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
