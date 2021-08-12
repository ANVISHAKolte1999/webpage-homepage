import React from "react";
import "./About.css"
import aboutus from "../assets/images/aboutus.jpg";
import md_5aa7473ed3d04 from "../assets/images/md_5aa7473ed3d04.jpg";
import { FaLock, FaPiggyBank, FaIdCard, FaDna } from "react-icons/fa";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>ABOUT US</h2>
                    <p className="text-secondary">
                        {" "}
                        <span>
                            - A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN RELATED
                            INFO -
                        </span>
                    </p>
                </div>
                {/* ABOUT US */}
                <div className="container">
                    <div className="row my-3 mx-auto aboutSection">
                        <div className="col">
                            <img src={aboutus} alt="" width="600" height="auto" />
                        </div>
                        <div className="col">
                            <h4 className="mx-5 px-4">WE ARE DEXDRONE</h4>
                            <p>
                                Secured, transparent and trusted platform for investment and trading. Our
                                platform is designed by experts with simple and effective tool of investing.
                                Its feature will guide everyone with full support. Users will be able to
                                invest and trade easily with any mode of currency. We strive for
                                transforming money management industry open for everyone and anywhere.
                            </p>
                            <p className="text-secondary">OUR MISSION | OUR ADVANTAGES | OUR GUARANTEES</p>
                            <p>
                                To remove the barriers in investment and trading. Make the service simple
                                transparent.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ABOUT TWO */}
                <div className="container">
                    <div className="row text-center my-5">
                        <div className="col-md-7 bitSection">
                            <div className="row">
                                <div className="col-md-6">
                                    <FaLock className="my-3 h3" />
                                    <h4 className="text-primary">TRUSTED AND SECURED PLATFORM</h4>
                                    <p className="text-secondary">We have two step authentication processes to save your assets from online fraud.</p>
                                </div>
                                <div className="col-md-6">
                                    <FaPiggyBank className="my-3 h3" />
                                    <h4 className="text-primary">MULTI ASSET PLATFORM</h4>
                                    <p className="text-secondary">Dexdrone supports any currency in trading and investing</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <FaIdCard className="my-3 h3" />
                                    <h4 className="text-primary"> WORLD COVERAGE</h4>
                                    <p className="text-secondary">Provide investment and forex trading all over the world.</p>
                                </div>
                                <div className="col-md-6">
                                    <FaDna className="my-3 h3" />
                                    <h4 className="text-primary">EXPERT SUPPORT</h4>
                                    <p className="text-secondary">Problem arrived we are here to solve it. Our expert professionals are here to support you in any language.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={md_5aa7473ed3d04} alt="" width="auto" height="550" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
