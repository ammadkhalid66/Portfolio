import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css"
import { faCss3, faFacebookSquare, faHtml5, faInstagramSquare, faJs, faLinkedinIn, faNodeJs, faReact, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function About() {
    const [activeTab, setActiveTab] = useState('about'); // State to track active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return(
        <Container className=" h-100 aboutall"  >
            <Row className="justify-content-center align-items-center h-100">
                <Row className="align-items-center  justify-content-start">
                    <Row className="col-lg-6 p-0 mt-5 d-none d-lg-flex vh-100  ">
                        <Col className="p-0  col-12 ">
                            <img className="w-100 m-0 h-100" src="Man.png" alt=""  />
                        </Col>
                    </Row>
                    <Col className="col-lg-6 col-12  h-100 ">
                            <Col className="col-12 mb-5">
                                <Row>
                                    <Col onClick={() => handleTabClick('about')} className={`tab ${activeTab === 'about' ? 'active-tab' : ''}`}>About</Col>
                                    <Col onClick={() => handleTabClick('services')} className={ `tab ${activeTab === 'services' ? 'active-tab' : ''}`}>Services</Col>
                                    <Col onClick={() => handleTabClick('content')} className={`tab ${activeTab === 'content' ? 'active-tab' : ''}`}>Content</Col>
                                    <Col onClick={() => handleTabClick('cta')} className={`tab ${activeTab === 'cta' ? 'active-tab' : ''}`}>Call To Action</Col>
                                </Row>
                            </Col>
                            <Col className="col-12 data">
                                {activeTab === 'about' && <>
                                <Col className="fw-bold h1"> Hi I'm Ammad <br /> A MERN Developer </Col>  
                                <Col className="h6 fw-bold mb-5">
                                    I offer my assistance for your project, backed by one year of professional experience. My proficiency and quality of work reflect my commitment to excellence. I am eager to showcase my projects and contribute effectively to your team. My dedication to continual learning ensures I stay current in the ever-evolving programming landscape.
                                </Col>
                                </>}
                                {activeTab === 'services' && <>
                                    <Row>
                                        <Col className="col-3 fw-bold h3">SKILLS :</Col>
                                        <Col>
                                            <Row>
                                                <Col className="fw-bold h3 text-center">
                                                    <FontAwesomeIcon className="html" icon={faHtml5}></FontAwesomeIcon>
                                                </Col>
                                                <Col className="fw-bold h3 text-center">
                                                    <FontAwesomeIcon className="CSS" icon={faCss3}></FontAwesomeIcon>
                                                </Col>
                                                <Col className="fw-bold h3 text-center">
                                                    <FontAwesomeIcon className="js" icon={faJs}></FontAwesomeIcon>
                                                </Col>
                                                <Col className="fw-bold h3 text-center">
                                                    <FontAwesomeIcon className="react" icon={faReact}></FontAwesomeIcon>
                                                </Col>
                                                <Col className="fw-bold h3 text-center">
                                                    <FontAwesomeIcon className="node" icon={faNodeJs}></FontAwesomeIcon>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </>}
                                {activeTab === 'cta' && <>
                                    <Row>
                                        <Col className="col-3 h3 mb-2 text-center">
                                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        </Col>
                                        <Col>+92-306-2644767</Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-3 h3 mb-2 text-center">
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </Col>
                                        <Col>
                                            ammadkhalid601@gmail.com
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-3 h3 mb-2 text-center">
                                            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                                        </Col>
                                        <Col>Lahore, Pakistan</Col>
                                    </Row>
                                </>}
                                {activeTab === 'content' && <>
                                    <Row className="mb-4">
                                        <Col className="col-12 text-start text-primary fw-bold h3">ZNZ Communication</Col>
                                        <Col className="ps-5">
                                            I have gained 6 months of valuable experience as a MERN stack developer at ZNZ Communication. During my tenure, I honed my skills in MongoDB, Express.js, React, and Node.js, contributing to the development of robust web applications. I am eager to apply my expertise and continue growing in the field of web development.
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-12 text-start text-primary fw-bold h3">Fiverr</Col>
                                        <Col className="ps-5">
                                            With 2 years of experience on the Fiverr platform, I've primarily worked as a front-end developer, delivering quality solutions. Now, I'm expanding my skills to backend and full-stack development. I'm excited to leverage my diverse experience to contribute effectively across all aspects of web development.
                                        </Col>
                                    </Row>
                                </>}
                            </Col>
                            <Col className="col-12">
                                <Row>
                                    {activeTab === 'about' && <>
                                        <Col className="h2 face2 text-center">
                                            <FontAwesomeIcon className="face" icon={faFacebookSquare}></FontAwesomeIcon>
                                        </Col>
                                    </>}
                                    {activeTab === 'about' && <>
                                        <Col className="h2 text-center">
                                            <FontAwesomeIcon className="insta" icon={faInstagramSquare}></FontAwesomeIcon>
                                        </Col>
                                    </>}
                                    {activeTab === 'about' && <>
                                        <Col className="h2 text-center">
                                            <FontAwesomeIcon className="link" icon={faLinkedinIn}></FontAwesomeIcon>
                                        </Col>
                                    </>}
                                    {activeTab === 'about' && <>
                                        <Col className="h2 text-center">
                                            <FontAwesomeIcon className="twitter" icon={faTwitterSquare}></FontAwesomeIcon>
                                        </Col>
                                    </>}
                                </Row>
                            </Col>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}