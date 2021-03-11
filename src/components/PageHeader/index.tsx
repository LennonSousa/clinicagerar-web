import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { FaWhatsapp, FaRegCalendarAlt } from 'react-icons/fa';

import './styles.css';
import logoImg from '../../assets/images/logo-horizontal-branco.svg';
import scheduleImage from '../../assets/images/undraw_Work_time_re_hdyv.svg';

interface PageHeaderProps {
    activeLink?: "home" | "about" | "our-services" | "schedule" | "contact";
}

const PageHeader: React.FC<PageHeaderProps> = ({ activeLink }) => {
    const [show, setShow] = useState(true);

    const [showModalSchedule, setShowModalSchedule] = useState(false);

    const handleClose = () => setShowModalSchedule(false);
    const handleShow = () => setShowModalSchedule(true);

    const navbarControl = () => {
        if (window.scrollY > 300) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl);
        return () => window.removeEventListener('scroll', navbarControl);
    }, []);

    return (
        <>
            <Navbar className="nav-container-top" variant="dark" expand="lg">
                <Container className="nav-top-container">
                    <Navbar.Brand href="/">
                        <img
                            src={logoImg}
                            height="60"
                            className="d-inline-block align-top"
                            alt="Clínica Gerar"
                        />
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col className="nav-contact-container-link">
                                            <Nav.Link href="https://api.whatsapp.com/send?phone=+5599991091718" target="_blank"><FaWhatsapp size={24} /> {` `} 99 99109-1718</Nav.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="nav-contact-container-text">
                                            Dr. Evaldo Reis Silva
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className="nav-contact-container-link">
                                            <Nav.Link href="https://api.whatsapp.com/send?phone=+5599988090998" target="_blank"><FaWhatsapp size={24} /> {` `} 99 98809-0998</Nav.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="nav-contact-container-text">
                                            Dra. Cristina Célia Andrade
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className="nav-contact-container-link">
                                            <Nav.Link onClick={handleShow} ><FaRegCalendarAlt size={24} /> {` `} Horário de atendimento</Nav.Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar className="nav-container-bottom"
                style={{
                    backgroundColor: show ? 'rgba(0, 58, 60, 1)' : 'rgba(0, 58, 60, 0.8)',
                    boxShadow: show ? 'none' : 'rgb(0 0 0 / 31%) 0px 4px 11px 2px'
                }}
                variant="dark"
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="/" className="nav-brand-bottom" style={{ top: show ? "-100%" : 10 }}>
                        <img
                            style={{ opacity: show ? 0 : 1 }}
                            src={logoImg}
                            height="30"
                            className="align-top"
                            alt="Clínica Gerar"
                        />
                    </Navbar.Brand>

                    <div className="nav-bottom-container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>

                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className={`nav-link ${activeLink === "home" ? 'nav-header-link-active' : 'nav-header-link'}`}>INÍCIO</Link>
                            <Link to="/about" className={`nav-link ${activeLink === "about" ? 'nav-header-link-active' : 'nav-header-link'}`}>SOBRE NÓS</Link>
                            <Link to="/our-services" className={`nav-link ${activeLink === "our-services" ? 'nav-header-link-active' : 'nav-header-link'}`}>NOSSOS SERVIÇOS</Link>
                            <Link to="/contact" className={`nav-link ${activeLink === "contact" ? 'nav-header-link-active' : 'nav-header-link'}`}>CONTATO</Link>

                            <div className="nav-bottom-links-container">
                                <Row>
                                    <Col className="mt-3" sm={4}>
                                        <Row>
                                            <Col className="nav-contact-container-link">
                                                <Nav.Link href="https://api.whatsapp.com/send?phone=+5599991091718" target="_blank"><FaWhatsapp size={24} /> {` `} 99 99109-1718</Nav.Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="nav-contact-container-text">
                                                Dr. Evaldo Reis Silva
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col className="mt-3" sm={4}>
                                        <Row>
                                            <Col className="nav-contact-container-link">
                                                <Nav.Link href="https://api.whatsapp.com/send?phone=+5599988090998" target="_blank"><FaWhatsapp size={24} /> {` `} 99 98809-0998</Nav.Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="nav-contact-container-text">
                                                Dra. Cristina Célia Andrade
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col className="mt-3" sm={4}>
                                        <Row>
                                            <Col className="nav-contact-container-link">
                                                <Nav.Link onClick={handleShow} ><FaRegCalendarAlt size={24} /> {` `} Horário de atendimento</Nav.Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModalSchedule} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: "#003A3C", fontWeight: 600 }}>Nossos horários de funcionamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mt-4 mb-4 justify-content-center align-items-center text-center">
                        <Col sm={5}>
                            <Image fluid src={scheduleImage} alt="Horário de funcionamento" />
                        </Col>

                        <Col className="mt-5" sm={5}>
                            <Row className="mb-2">
                                <Col>
                                    <h5 style={{ color: "#003A3C", fontWeight: 600 }}>De segunda a sexta.</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6>Das 08h às 12h</h6>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6>e das 14h às 18h.</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PageHeader;