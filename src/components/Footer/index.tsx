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
                    <Col className="pt-3 pb-3" sm={3}>
                        <Row className="justify-content-center">
                            <Col className="col-6" sm={8}>
                                <Image fluid src={logoImg} alt="Logomarca Clínica Gerar" />
                            </Col>
                        </Row>
                    </Col>

                    <Col className="pt-3 pb-3" sm={3}>
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

                    <Col className="pt-3 pb-3" sm={3}>
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

                    <Col className="pt-3 pb-3" sm={3}>
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
                                <div className="footer-section-text"><h6>65903-075</h6></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <section className="footer-bottom-section">
                <Container>
                    <Row className="pt-2">
                        <Col>
                            <Row className="justify-content-center">
                                <Col sm={2}>
                                    <Link className="footer-bottom-link" to="/"><p>Termos de uso</p></Link>
                                </Col>

                                <Col sm={2}>
                                    <Link className="footer-bottom-link" to="/"><p>Notificação de privacidade</p></Link>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="footer-bottom-text">
                                    <p>Clínica Gerar Imperatriz - © 2021 Todos os direitos reservados.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}

export default Footer;