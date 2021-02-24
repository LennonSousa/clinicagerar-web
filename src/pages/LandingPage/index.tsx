import React, { useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';

import PageHeader from '../../components/PageHeader';
import OurService from '../../components/OurServices';
import Members from '../../components/Members';

import './styles.css'

import imageDoctors from '../../assets/images/undraw_doctors_hwty.svg';

import ImageSlide01 from '../../assets/images/slide-item-01.jpg';
import ImageSlide02 from '../../assets/images/slide-item-02.png';

import carouselImgBottom from '../../assets/images/header-carousel-bottom.svg';

import serviceMedicineFetal from '../../assets/images/service-medicine-fetal.jpg';
import serviceHumanReproduction from '../../assets/images/service-human-reproduction.jpg';
import serviceUltra from '../../assets/images/service-ultra.jpg';

import teamArticleContainerTop from '../../assets/images/team-container-top.svg';
import teamMember01 from '../../assets/images/team-01.jpg';
import teamMember02 from '../../assets/images/team-02.jpg';

import visitUsArticleContainerTop from '../../assets/images/visit-us-container-top.svg';

import newsArticleImg from '../../assets/images/news-01.jpg';

function LandingPage() {
    useEffect(() => {
        ScrollReveal().reveal('.section-col-back', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.image-doctors', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.col-mark', { delay: 500, duration: 1500 });
    }, []);

    return (
        <>
            <PageHeader />

            <header>

                <Carousel indicators={true} nextLabel="" prevLabel="" interval={5000} fade={true}>
                    <Carousel.Item style={{ backgroundColor: '#003A3C' }}>
                        <div className="header-carousel-col" style={{ backgroundImage: `url(${ImageSlide01})` }}>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item style={{ backgroundColor: '#F97352' }}>
                        <div className="header-carousel-col" style={{ backgroundImage: `url(${ImageSlide02})` }}>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </header>

            <section className="middle-container">
                <div className="middle-waves top" >
                    <div className="header-img-bottom-reverse-front" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>
                    <div className="header-img-bottom" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>
                    <div className="header-img-bottom-reverse" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>
                </div>

                <Container className="middle-section">
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Agende uma consulta</h1>
                        </div>
                        <Col className="section-col">
                            <h1>Agende uma consulta</h1>
                            <p className="title-dark">Você pode marcar uma consulta pelo whatsapp ou por e-mail.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <Image fluid className="image-doctors" src={imageDoctors} alt="Marcar uma consulta." />
                        </Col>

                        <Col className="col-mark pt-2 pb-5" sm={7}>
                            <Row className="justify-content-end">
                                <Col sm={8}>
                                    <p className="title-light"><FaRegEnvelope size={24} />{` `}Por e-mail</p>
                                </Col>

                                <Col sm={8}>
                                    <p className="sub-title">Você preenche os seus dados, escolhe o seu plano e retornaremos com a confirmação do seu agendamento.</p>
                                </Col>

                                <Col sm={8}>
                                    <button className="button-standard" type="button">Agendar por e-mail</button>
                                </Col>
                            </Row>

                            <Row className="justify-content-end mt-5">
                                <Col sm={8}>
                                    <p className="title-light"><FaWhatsapp size={24} />{` `}Por whatsapp</p>
                                </Col>

                                <Col sm={8}>
                                    <p className="sub-title">Você conversa diretamente com um de nossos atendentes e pode tirar todas as suas dúvidas agora mesmo.</p>
                                </Col>

                                <Col sm={8}>
                                    <button className="button-standard" type="button">Agendar por whatsapp</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <article className="services-article section-top">
                <Container>
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Nossos serviços</h1>
                        </div>

                        <Col className="section-col">
                            <h1>Nossos serviços</h1>
                            <p className="title-dark">Oferecemos os melhores serviços para você.</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <OurService ourService={
                            {
                                id: 1,
                                title: 'Reprodução humana',
                                description: 'Técnica também conhecida como "bebê de proveta", a fertilização in vitro (FIV) é um processo em que a fertilização do óvulo com espermatozoide é feita em laboratório.',
                                image: serviceHumanReproduction
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 2,
                                title: 'Medicina fetal',
                                description: 'A Medicina fetal é uma especialidade que visa o acompanhamento detalhado de gestações através de aconselhamento genético, ultrassonografia e procedimentos invasivos, sempre visando o bem estar do binômio mãe-feto. ',
                                image: serviceMedicineFetal
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 3,
                                title: 'Ultrassonografia',
                                description: 'A ultrassonografia é uma técnica médica, não invasiva, utilizada para reproduzir imagens dinâmicas – observadas em tempo real - dos órgãos internos, tecidos, rede vascular e fluxo sanguíneo, auxiliando, complementando e interagindo com outras especialidades médicas.',
                                image: serviceUltra
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 1,
                                title: 'Reprodução humana',
                                description: 'Técnica também conhecida como "bebê de proveta", a fertilização in vitro (FIV) é um processo em que a fertilização do óvulo com espermatozoide é feita em laboratório.',
                                image: serviceHumanReproduction
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 2,
                                title: 'Medicina fetal',
                                description: 'A Medicina fetal é uma especialidade que visa o acompanhamento detalhado de gestações através de aconselhamento genético, ultrassonografia e procedimentos invasivos, sempre visando o bem estar do binômio mãe-feto. ',
                                image: serviceMedicineFetal
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 3,
                                title: 'Ultrassonografia',
                                description: 'A ultrassonografia é uma técnica médica, não invasiva, utilizada para reproduzir imagens dinâmicas – observadas em tempo real - dos órgãos internos, tecidos, rede vascular e fluxo sanguíneo, auxiliando, complementando e interagindo com outras especialidades médicas.',
                                image: serviceUltra
                            }
                        } />
                    </Row>
                </Container>
            </article>

            <article className="section-top">
                <Container>
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Equipe</h1>
                        </div>

                        <Col className="section-col">
                            <h1>Nossa Equipe</h1>
                            <p className="title-dark">A equipe mais capacidada para lhe atender.</p>
                        </Col>
                    </Row>
                </Container>
            </article>

            <article style={{ backgroundImage: `url(${teamArticleContainerTop})` }} className="team-article">
                <Container>
                    <Row className="justify-content-center">
                        <Members member={
                            {
                                id: 1,
                                title: 'Medicina fetal',
                                description: 'A Medicina fetal é uma especialidade que visa o acompanhamento detalhado de gestações através de aconselhamento genético, ultrassonografia e procedimentos invasivos, sempre visando o bem estar do binômio mãe-feto. ',
                                image: teamMember01
                            }
                        } />

                        <Members member={
                            {
                                id: 2,
                                title: 'Medicina fetal',
                                description: 'A Medicina fetal é uma especialidade que visa o acompanhamento detalhado de gestações através de aconselhamento genético, ultrassonografia e procedimentos invasivos, sempre visando o bem estar do binômio mãe-feto. ',
                                image: teamMember02
                            }
                        } />
                    </Row>
                </Container>
            </article>

            <article className="news-article pt-5 pb-5">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            <Row>
                                <Col className="pt-3 pb-3">
                                    <h1>Título do artigo</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="news-article-text pt-3 pb-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Image fluid src={newsArticleImg} className="news-article-image" />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="news-article-button pt-4">
                            <button className="button-standard" type="button">Saber mais</button>
                        </Col>
                    </Row>
                </Container>
            </article>

            <article style={{ backgroundImage: `url(${visitUsArticleContainerTop})` }} className="visit-us-article">
                <Container>
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Venha nos conhecer</h1>
                        </div>

                        <Col className="section-col">
                            <h1>Venha nos conhecer</h1>
                            <p className="title-dark">Conheça um pouco mais a Clínica Gerar.</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Carousel className="visit-us-article-carousel" indicators={true} nextLabel="" prevLabel="" interval={5000} fade={true}>
                            <Carousel.Item title="Nossa recepção">
                                <Image fluid src={ImageSlide01} />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </article>
        </>
    );
}

export default LandingPage;