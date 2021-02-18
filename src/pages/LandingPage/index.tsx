import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';

import PageHeader from '../../components/PageHeader';
import './styles.css'

import imageDoctors from '../../assets/images/undraw_doctors_hwty.svg';

import ImageSlide01 from '../../assets/images/slide-item-01.png';
import ImageSlide02 from '../../assets/images/slide-item-02.png';

import carouselImgBottom from '../../assets/images/header-carousel-bottom.svg';

function LandingPage() {
    ScrollReveal().reveal('.image-doctors', { delay: 375, reset: true, duration: 1000, origin: 'left', distance: '50%' });
    ScrollReveal().reveal('.col-mark', { delay: 500, reset: true, duration: 1500 });

    return (
        <>
            <header>
                <PageHeader />
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
                        <Col>
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
                        <Col>
                            <h1>Nossos serviços</h1>
                            <p className="title-dark">Oferecemos os melhores serviços para você.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </article>
        </>
    );
}

export default LandingPage;