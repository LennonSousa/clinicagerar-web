import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

import 'leaflet/dist/leaflet.css';
import './styles.css'

import headerImage from '../../assets/images/capa-sobre.jpg'

function About() {
    useEffect(() => {
        ScrollReveal().reveal('.section-col-back', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.about-header-col', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
    }, []);

    return (
        <>
            <PageHeader activeLink="about" />

            <header className="about-header" style={{ backgroundImage: `url(${headerImage})` }}>
                <Container style={{ height: '100%' }}>
                    <Row style={{ height: '100%', alignItems: 'flex-end' }}>
                        <Col>
                            <div className="about-header-div">
                                <Row>
                                    <div className="section-col-back block-with-text">
                                        <h1 className="about-header-back-h1">Sobre nós</h1>
                                    </div>
                                    <Col className="about-header-col">
                                        <h1 className="about-header-h1">Sobre nós</h1>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <section>
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <div className="about-article-div"></div>
                        </Col>
                    </Row>
                </Container>
            </section>

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
                </Container>
            </article>

            <Footer />
        </>
    );
}

export default About;