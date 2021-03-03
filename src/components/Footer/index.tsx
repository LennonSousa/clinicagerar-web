import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

import './styles.css';
import logoImg from '../../assets/images/logo-horizontal-branco.svg';
import footerBackground from '../../assets/images/footer-background.svg';

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(${footerBackground})` }}>
            <Container className="footer-container">
                <Row className="footer-row justify-content-center align-items-center pt-5">
                    <Col className="col-6" sm={2}>
                        <Image fluid src={logoImg} alt="Logomarca Clínica Gerar" />
                    </Col>

                    <Col className="mt-3 bt-3" sm={10}>
                        <Row>
                            <Col className="mt-3 bt-3" sm={4}>
                                <Row>
                                    <Col>
                                        <h5 className="footer-section-title">Redes sociais</h5>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Link className="footer-section-text" to="/"><h6><FaInstagram size={24} /> @clinicagerar</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6><FaFacebookSquare size={24} /> Clinica Gerar Imperatriz</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6><FaWhatsapp size={24} /> 99 98798-4898</h6></Link>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="mt-3 bt-3" sm={4}>
                                <Row>
                                    <Col>
                                        <h5 className="footer-section-title">Serviços</h5>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Link className="footer-section-text" to="/"><h6>Ginecologia</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6>Obstetrícia</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6>Ultrassonografia</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6>Medicina fetal</h6></Link>
                                        <Link className="footer-section-text" to="/"><h6>Cirurgia plástica</h6></Link>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="mt-3 bt-3" sm={4}>
                                <Row>
                                    <Col>
                                        <h5 className="footer-section-title">Endereço</h5>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="footer-section-text"><h6>Av. Bernardo Sayão, 3650</h6></div>
                                        <div className="footer-section-text"><h6>Medical Center, 5º andar</h6></div>
                                        <div className="footer-section-text"><h6>Bairro Três Poderes</h6></div>
                                        <div className="footer-section-text"><h6>Imperatriz - MA</h6></div>
                                        <div className="footer-section-text"><h6>65698-000</h6></div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;