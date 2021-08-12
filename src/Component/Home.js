import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import IMG1 from "./../assets/images/mkt1.jpg";
import IMG2 from "./../assets/images/mkt2.jpg";
import IMG3 from "./../assets/images/mkt3.jpg";
import { FaBitcoin } from "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import { GiWallet } from "react-icons/gi";
import { IoIosCash } from "react-icons/io";


const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-100 bgImage" src={IMG1} alt="First slide" height="500" />
                    <Carousel.Caption className="TextCaptions">
                    <Typography variant="h4" gutterBottom>YOUR GUIDE TO INVEST AND </Typography>
                        <h3>FOREX TRADING</h3>
                        <div class="btn-group my-5" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"Known Us"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"JOIN US"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"NOTIFICATION APP"}</div> 
                            </button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 bgImage" src={IMG2} alt="Second slide" height="500" />
                    <Carousel.Caption className="TextCaptions">
                    <Typography variant="h4" gutterBottom>
                    WORLD’S BEST PLATFORM TO
                   </Typography>
                        
                        <h3>BOOST YOUR ASSETS FROM INTERNET</h3>
                        <div class="btn-group my-5" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"Known Us"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"JOIN US"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"NOTIFICATION APP"}</div>
                            </button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 bgImage" src={IMG3} alt="Third slide" height="500" />
                    <Carousel.Caption className="TextCaptions">
                        <Typography variant="h4" gutterBottom>
                    WORLD’S BEST PLATFORM TO
                   </Typography>
                        <h3>BOOST YOUR ASSETS FROM INTERNET</h3>
                        <div class="btn-group my-5" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"Known Us"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"JOIN US"}</div>
                            </button>
                            <button type="button" class="btn btn-primary rounded mx-3 px-3">
                            <div>{"NOTIFICATION APP"}</div>
                            </button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container">
                <div className="row cardSection">
                    <div className="col col-md-12">
                        <div class="card h-100 w-auto ">
                            <div class="card-body rounded">
                                <div className="row">
                                    <div className="col-4">
                                        <GiWallet className="cardLogo h2" /> <h5>CREATE AN ACCOUNT</h5>
                                        <p className="text-secondary">
                                            Open an account with Dexdrone by fill the form for free.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <FaBitcoin className="cardLogo h2" /> <h5>FUND DEPOSIT</h5>
                                        <p className="text-secondary">
                                            Credit with minimum deposit and activate the account.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <IoIosCash className="cardLogo h2" /> <h5>START EARNING</h5>
                                        <p className="text-secondary">
                                            Start earning by referring more people.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
