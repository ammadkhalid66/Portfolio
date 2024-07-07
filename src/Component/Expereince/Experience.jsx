import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap";

export default function Expereince() {
    return(
        <Container className=" h-100"  >
            <Row className="justify-content-center align-items-center h-100">
                <Row className="align-items-center justify-content-center ">
                    <Row className="col-6 h-100 ">
                            <Col className="col-12 fw-bold h1">Hi I'm Ammad <br /> A MERN Developer</Col>
                            <Col className="col-12 ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illo voluptates totam expedita, dolor repudiandae voluptas quae, placeat dolore officiis optio neque ducimus incidunt, beatae ut eligendi iure at accusantium?
                            </Col>
                            <Col className="col-12">
                                <Row>
                                    <Col>icon1</Col>
                                    <Col>icon2</Col>
                                    <Col>icon3</Col>
                                    <Col>icon4</Col>
                                </Row>
                            </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    );
}