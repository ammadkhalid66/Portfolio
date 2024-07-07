import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import ParticlesComponent from "../Particles/Particles";
import "./Main.css"

const particlesStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -2
};

export default function Main() {
    const [activeTab, setActiveTab] = useState('home');

    function handleTab(tab) {
        setActiveTab(tab);
    }
    return (
        <div className="gradient ">
            <ParticlesComponent id="particles" style={particlesStyle} />
            <Container  fluid className=" vh-100 text-white position-relative ">
                <Row className="navrow py-2">
                    <Col className="text-center"><Link to="/"  onClick={() => handleTab('home')} className={`text-white text-decoration-none h4 ${activeTab === 'home' ? 'active' : ''}`}>Home</Link></Col>
                    <Col className="text-center"><Link to="/about" onClick={() => handleTab('projects')} className={`text-white text-decoration-none h4 ${activeTab === 'projects' ? 'active' : ''}`}>Projects</Link></Col>
                    {/* <Col><Link to="/experience" className="text-white">Socials</Link></Col> */}
                    <Col className="text-center"><Link to="/contact" onClick={() => handleTab('contact')} className={`text-white text-decoration-none h4 ${activeTab === 'contact' ? 'active' : ''}`}>Contact information</Link></Col>
                    {/* <Col><Link to="/login" className="text-white">Login</Link></Col> */}
                    {/* <Col><Link to="/sign" className="text-white">Sign Up</Link></Col> */}
                </Row>
                <Row className="h-100">
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
