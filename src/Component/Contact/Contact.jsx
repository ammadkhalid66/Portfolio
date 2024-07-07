import "bootstrap/dist/css/bootstrap.min.css"
import { Form } from "react-bootstrap";
import "./Contact.css"
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    return(
        <Container className=" h-100 position-relative cont"  >
            <Row className="bottom-0 d-lg-flex d-none Anime">
                <Col className="col-10">
                    <img className="w-100" src="Man.png" alt="" />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center h-100">
                <Row className="align-items-center justify-content-center ">
                    <Row className="col-lg-6 col-12 h-100 ">
                            <Col className="col-12 fw-bold h1">
                                <Form>
                                    <Form.Group controlId="form-group-id">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                    </Form.Group>
                                    <Form.Group controlId="form-group-id">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={15} placeholder="Enter your Message" />
                                    </Form.Group>
                                    <button className="btn btn-dark mt-lg-0 mt-2" type='button'>Submit</button>
                                </Form>
                            </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    );
}