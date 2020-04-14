import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import Headshot from "../images/headshot2.png";
import Cats from "../images/gitHub.png";
import Github from "../images/gitHub.png";

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <hr></hr>
            <Row>
                <Col className="col-lg-4 col-md-12">
                    <Row>
                        <img src={Headshot} alt="headshot" />
                    </Row>
                    <Row>
                        <p> &nbsp;&nbsp; &nbsp;&nbsp;Hello, my name is Shelby Palumbo and I am an aspiring Full Stack Developer!
                <p><i className="fab fa-linkedin"></i><Link to="https://www.linkedin.com/in/shelby-palumbo-a96748196/"
                                target="_blank"> Connect with me on LinkedIn!</Link></p>
                            <p><Link to="https://github.com/shelbypalumbo" target="_blank">
                                <img alt="github" src={Github} width="10%" /> Check out my Github!</Link></p>
                        </p>
                    </Row>
                </Col>


                <Col class="col-lg-8 col-md-12">
                    <p>
                        <img className="cat-imgs" src={Cats} alt="Loui and Mina" align="right" />
                        &nbsp;&nbsp; &nbsp;&nbsp; Since 2014, I have worked in the professional audio industry
                        as a Diamond Series Microphone Technician for
              <Link to="https://www.telefunken-elektroakustik.com/" target="_blank">Telefunken Elektroakustik.</Link>
                        While I have enjoyed my time as a technician, I started to feel unsatisfied and understimulated with my
                        work.
            </p>
                    <p>
                        &nbsp;&nbsp; &nbsp;&nbsp;About a year ago, I decided to take a look back on some of my old web development
                        projects from
                        college and I was immediately drawn back in. I started classes through Coursera, watching tutorials, and
                        then I stumbled upon the UCONN coding bootcamp!
            </p>
                    <p>
                        &nbsp;&nbsp; &nbsp;&nbsp;This program has shown me that web development is the right path for me.
                        While there is still so much left for me to learn, I find the challenge of an ever changing feild and
                        lifelong learning exciting!
            </p>
                    <p> &nbsp;&nbsp; &nbsp;&nbsp;These days you'll find me locked in on a computer screen, drinking coffee, and
                      spending time with my two cats, Mina and Loui.
            </p>
                </Col>
            </Row>
        </div>
    );
}

export default About;
