import "bootstrap/dist/css/bootstrap.min.css"
import './About2.css'
import { Container, Row, Col } from "react-bootstrap";

export default function About2() {
    
    return(
        <Container className=" h-100 position-relative Anime2"  >
            <Row className="bottom-0 Anime">
                <Col className="col-lg-10 d-lg-block d-none">
                    <img className="w-100" src="Man.png" alt="" />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center h-100 ">
                <Row className="align-items-center justify-content-center  ">
                    <Row className="col-lg-7 col-12 h-100 flex-sm-row flex-column">
                            <Col className=" fw-bold h1 position-relative">
                                <img className="w-100" src="web1.jpg" alt="" />
                                <Col className="col-11 top-0 left-0 p-0 m-0 position-absolute imagehover">
                                    <img className="w-100 ms-2 ps-1 imagehover2 " src="web1.jpg" alt="" />
                                    <div style={{backgroundColor:"transparent"}} className="content position-absolute top-0 left-0">
                                        <a className="btn2 bg-none"> Visit Us </a>
                                    </div>
                                </Col>
                            </Col>
                            <Col className=" position-relative">
                                <img className="w-100 " src="web2.jpg" alt="" />
                                <Col className="col-11 top-0 left-0 p-0 m-0 position-absolute imagehover">
                                    <img className="w-100 ms-2 ps-1 " src="web2.jpg" alt="" />
                                    <div style={{backgroundColor:"transparent"}} className="content position-absolute top-0 left-0">
                                        <a className="btn2 bg-none"> Visit Us </a>
                                    </div>
                                </Col>
                            </Col>
                    </Row>
                    <Row className="col-lg-7 col-12 mt-sm-0 mt-2 h-100 ">
                            <Col className=" fw-bold h1 position-relative">
                                <img className="w-100" src="web3.jpg" alt="" />
                                <Col className="col-11 top-0 left-0 p-0 m-0 position-absolute imagehover">
                                    <img className="w-100 ms-2 ps-1 " src="web3.jpg" alt="" />
                                    <div style={{backgroundColor:"transparent"}} className="content position-absolute top-0 left-0">
                                        <a className="btn2 bg-none"> Visit Us </a>
                                    </div>
                                </Col>
                            </Col>
                            <Col className=" fw-bold h1 position-relative">
                                <img className="w-100 h-100" src="web1.jpg" alt="" />
                                <Col className="col-11 top-0 h-100 left-0 p-0 m-0 position-absolute imagehover">
                                    <img className="w-100 h-100 ms-2 p-0 " src="web1.jpg" alt="" />
                                    <div style={{backgroundColor:"transparent"}} className="content position-absolute top-0 left-0">
                                        <a className="btn2 bg-none"> Visit Us </a>
                                    </div>
                                </Col>
                            </Col>
                            <Col className=" position-relative">
                                <img className="w-100 h-100 " src="web2.jpg" alt="" />
                                <Col className="col-11 top-0 h-100 left-0 p-0 m-0 position-absolute imagehover">
                                    <img className="w-100 h-100 ms-2 p-0 " src="web2.jpg" alt="" />
                                    <div style={{backgroundColor:"transparent"}} className="content position-absolute top-0 left-0">
                                        <a className="btn2 bg-none"> Visit Us </a>
                                    </div>
                                </Col>
                            </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    );
}