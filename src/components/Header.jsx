import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div
                className={`row m-0 py-4 px-3`}
                style={{
                    transition: "all 150ms ease-in-out",
                    position: "sticky",
                    top: 0,
                }}
            >
                <div className="col-2 d-flex justify-content-center align-items-center ">
                    <img
                        src="/images/mini.jpeg"
                        className="img-fluid"
                        style={{
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                        }}
                        alt=""
                    />
                    <h6 className="ps-2 pt-2">Batyr</h6>
                    <i class="bi bi-patch-check-fill ps-2 "></i>
                    {/* <svg
                        style={{
                            color: "#64ffda",
                            width: "42px",
                            height: "42px",
                            fill: "none",
                            transition:
                                "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
                        }}
                        id="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 84 96"
                    >
                        <title>Logo</title>
                        <g transform="translate(-8.000000, -2.000000)">
                            <g transform="translate(11.000000, 5.000000)">
                                <path
                                    d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                                    fill="currentColor"
                                ></path>
                                <polygon
                                    id="Shape"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                                ></polygon>
                            </g>
                        </g>
                    </svg> */}
                </div>
                <div
                    className="col-10 d-flex justify-content-end align-items-center"
                    style={{ fontSize: "13px" }}
                >
                    <div className="d-flex">
                        <Link to="#" className="px-3 text-main-hover">
                            <span className="text-main">01.</span> About
                        </Link>
                        <Link to="#" className="px-3 text-main-hover">
                            <span className="text-main">02.</span> Experience
                        </Link>
                        <Link to="#" className="px-3 text-main-hover">
                            <span className="text-main">03.</span> Work
                        </Link>
                        <Link to="#" className="px-3 text-main-hover">
                            <span className="text-main">04.</span> Contact
                        </Link>
                        <Link to="#" className="px-3 text-main-hover d-flex">
                            <span className="text-main pe-1">05.</span>
                            <div class="dropdown">
                                <div
                                    // type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Language
                                </div>
                                <ul
                                    class="dropdown-menu shadow"
                                    style={{
                                        fontSize: "14px",
                                        minWidth: "130px",
                                        backgroundColor: "var(--dark-blue)",
                                    }}
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            style={{
                                                color: "var(--green)",
                                            }}
                                            href="#"
                                        >
                                            Russian
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="#"
                                            style={{
                                                color: "var(--green)",
                                            }}
                                        >
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="#"
                                            style={{
                                                color: "var(--green)",
                                            }}
                                        >
                                            Turkmen
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <button
                        className="btn btn-outline-main mx-3 py-2 px-3"
                        style={{ fontSize: "13px" }}
                    >
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
