
import React from "react";
import "./Navbar.css";
import logodark from "../assets/images/logodark.png";

import { FaTelegramPlane, FaUser, FaLock } from "react-icons/fa";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg static-top SectionNavbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logodark} alt="..." />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" aria-current="page" href="#">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" href="#">
                                    ABOUT US
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" href="#">
                                    PLAN
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" href="#">
                                    OUR DOCUMENTS
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" href="#">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-white" href="#">
                                    CONTACT US
                                </a>
                            </li>
                        </ul>
                        <div className="mx-auto">
                            <button type="button" class="btn loginButton mx-2 px-3">
                                <FaLock />   LOGIN
                            </button>
                            <button type="button" class="btn registerButton mx-2 px-3">
                                <FaUser />  REGISTER
                            </button>
                            <button type="button" class="btn logoButton mx-2 px-3">
                                <FaTelegramPlane />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
