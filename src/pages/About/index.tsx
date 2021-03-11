import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import PageTop from '../../components/PageTop';
import Footer from '../../components/Footer';

import headerImage from '../../assets/images/capa-sobre.jpg';

import './styles.css'

function About() {

    return (
        <>
            <PageHeader activeLink="about" />

            <PageTop backgroundImage={headerImage} isBackgroundCenter title="Sobre nós" />

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