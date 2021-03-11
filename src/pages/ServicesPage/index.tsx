import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import PageTop from '../../components/PageTop';
import Footer from '../../components/Footer';

import servicesCover from '../../assets/images/services-cover.jpg';
import ginecologiaImg from '../../assets/images/our-services/service-ginecologia.jpg';
import obstetriciaImg from '../../assets/images/our-services/service-obstetricia.jpg';
import ultrassonImg from '../../assets/images/our-services/service-ultrassonografia.jpg';
import fetalImg from '../../assets/images/our-services/service-medicina-fetal.jpg';
import reproducaoImg from '../../assets/images/our-services/service-reproducao-humana.jpg';
import cirurgiaImg from '../../assets/images/our-services/service-cirurgia-plastica.jpg';

import './styles.css';

function ServicesPage() {
    return (
        <>
            <PageHeader activeLink="our-services" />

            <PageTop backgroundImage={servicesCover} isBackgroundCenter title="Nossos serviços" />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="article-text">
                            <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres to ensure students are completing courses that meet their pathway planning and future aspirations.

In 2018 we will be delivering Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.</p>
                        </Col>
                    </Row>

                    <Row id="service-ginecologia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={ginecologiaImg} className="service-item-img" alt="Ginecologia" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Ginecologia
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-obstetricia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Obstetrícia
                                            </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                        Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.
                                                </p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={obstetriciaImg} className="service-item-img" alt="Obstetrícia" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-ultrassonografia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={ultrassonImg} className="service-item-img" alt="Ultrassonografia" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Ultrassonografia
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                        Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-fetal" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Medicina Fetal
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.</p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={fetalImg} className="service-item-img" alt="Medicina fetal" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-reproducao" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={reproducaoImg} className="service-item-img" alt="Reprodução Humana" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Reprodução Humana
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-plastica" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="service-item-div">
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Cirurgia Plástica
                                            </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres.
                                                        Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.
                                                </p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className="service-item-col-img">
                                                <Image fluid src={cirurgiaImg} className="service-item-img" alt="Cirurgia Plástica" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </article>

            <Footer />
        </>
    );
}

export default ServicesPage;