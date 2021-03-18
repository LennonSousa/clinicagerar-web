import React, { useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import PageHeader from '../../components/PageHeader';
import OurService from '../../components/OurServices';
import Members from '../../components/Members';
import Footer from '../../components/Footer';

// Datas
import landingSlides from '../../data/landingSlides';
import membersList from '../../data/members';
import visitUsList from '../../data/visitUsSlides';

import 'leaflet/dist/leaflet.css';
import './styles.css'

import mapPin from '../../assets/images/map-pin.svg';
import imageDoctors from '../../assets/images/undraw_doctors_hwty.svg';

import carouselImgBottom from '../../assets/images/header-carousel-bottom.svg';

import service01Icon from '../../assets/images/service-01-icon.svg';
import service02Icon from '../../assets/images/service-02-icon.svg';
import service03Icon from '../../assets/images/service-03-icon.svg';
import service04Icon from '../../assets/images/service-04-icon.svg';
import service05Icon from '../../assets/images/service-05-icon.svg';
import service06Icon from '../../assets/images/service-06-icon.svg';

import teamArticleContainerTop from '../../assets/images/team-container-top.svg';

import mapArticleContainerTop from '../../assets/images/visit-us-container-top.svg';

import newsArticleImg from '../../assets/images/news-01.jpg';

import visitUsArticleBackground from '../../assets/images/visit-us-background.jpg';

import works01Img from '../../assets/images/convenios-unimed.svg';
import works02Img from '../../assets/images/convenios-bradesco.svg';
import works03Img from '../../assets/images/convenios-cassi.svg';

require('dotenv/config');

function LandingPage() {
    var mapIcon = Leaflet.icon({
        iconUrl: mapPin,
        iconSize: [38, 95],
        iconAnchor: [30, 30],
        popupAnchor: [-3, 0],
    });

    useEffect(() => {
        ScrollReveal().reveal('.section-col-back', { delay: 600, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.section-col', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.image-doctors', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.col-mark', { delay: 500, duration: 1500 });
    }, []);

    return (
        <>
            <PageHeader activeLink="home" />

            <header>

                <Carousel indicators={true} nextLabel="" prevLabel="" interval={3500} fade={true}>
                    {
                        landingSlides.map((slide, index) => {
                            return <Carousel.Item key={index} style={{ backgroundColor: '#003A3C' }}>
                                <div className="header-carousel-col" style={{ backgroundImage: `url(${slide.cover})` }}>
                                    <Container className="header-carousel-caption-container">
                                        <Row className="header-carousel-caption-row justify-content-center align-items-center text-center">
                                            <Col className="col-10" sm={8}>
                                                <div style={{ backgroundColor: slide.color }} className="header-carousel-caption-content">
                                                    <Row className="header-carousel-caption-content-row justify-content-center align-items-center">
                                                        <Col sm={10}>
                                                            <h1 className="visit-us-title-h1">{slide.title}</h1>
                                                        </Col>
                                                        <Col sm={10}>
                                                            <p className="header-carousel-caption-content-p">{slide.description}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Carousel.Item>
                        })
                    }
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
                                    <p className="title-light"><FaRegEnvelope size={24} />{` `}Agendamento on-line</p>
                                </Col>

                                <Col sm={8}>
                                    <p className="sub-title">Você preenche os seus dados, escolhe o dia e marca a sua consulta. Tudo muito fácil e rápido.</p>
                                </Col>

                                <Col sm={8}>
                                    <button className="button-standard" onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://www.doctoralia.com.br/z/EAPEkA', '_blank');
                                    }} type="button">Agendar agora</button>
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
                                    <button className="button-standard" onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://api.whatsapp.com/send?phone=+5599991091718', '_blank');
                                    }} type="button">Agendar por whatsapp</button>
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
                                title: 'Ginecologia',
                                image: service02Icon
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 2,
                                title: 'Obstetrícia',
                                image: service03Icon
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 3,
                                title: 'Ultrassonografia',
                                image: service01Icon
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 1,
                                title: 'Medicina fetal',
                                image: service04Icon
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 2,
                                title: 'Reprodução humana',
                                image: service05Icon
                            }
                        } />

                        <OurService ourService={
                            {
                                id: 3,
                                title: 'Cirurgia plástica',
                                image: service06Icon
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
                        {
                            membersList.map((member, index) => {
                                return <Members key={index} member={member} />
                            })
                        }
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

            <article style={{ backgroundImage: `url(${mapArticleContainerTop})` }} className="map-article pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Nossa localização</h1>
                        </div>

                        <Col className="section-col">
                            <h1>Nossa localização</h1>
                            <p className="title-dark">Venha nos fazer uma visita.</p>
                        </Col>
                    </Row>

                    <Row className="map-row justify-content-center">
                        <MapContainer center={[-5.508016025826771, -47.473843817431266]} zoom={17} tap={false} dragging={false} scrollWheelZoom={false} >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />
                            <Marker icon={mapIcon} position={[-5.508016025826771, -47.473843817431266]}>
                                <Popup>
                                    <div><h6>Av. Bernardo Sayão, 3650</h6></div>
                                    <div><h6>Medical Center, 5º andar</h6></div>
                                    <div><h6>Bairro Três Poderes</h6></div>
                                    <div><h6>Imperatriz - MA</h6></div>
                                    <div><h6>65903-075</h6></div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Row>
                </Container>
            </article>

            <article className="visit-us-article pt-5 pb-5">
                <div style={{ backgroundImage: `url(${visitUsArticleBackground})` }} className="visit-us-container-background mt-5 pb-5" >
                    <Container>
                        <Row>
                            <div className="section-col-back block-with-text">
                                <h1 className="visit-us-title-back-h1">Venha nos conhecer</h1>
                            </div>

                            <Col className="section-col">
                                <h1 className="visit-us-title-h1">Venha nos conhecer</h1>
                                <p className="title-dark">Conheça um pouco mais a Clínica Gerar.</p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Carousel className="visit-us-article-carousel" indicators={true} nextLabel="" prevLabel="" interval={5000}>
                                {
                                    visitUsList.map((item, index) => {
                                        return <Carousel.Item
                                            className="visit-us-article-carrousel-item"
                                            key={index}
                                            title={item.title}
                                            style={{ backgroundImage: `url(${item.cover})` }}
                                        >
                                            <Carousel.Caption>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    })
                                }
                            </Carousel>
                        </Row>
                    </Container>
                </div>
            </article>

            <article className="works-article section-top">
                <Container>
                    <Row>
                        <div className="section-col-back block-with-text">
                            <h1>Nossos convênios</h1>
                        </div>

                        <Col className="section-col">
                            <h1>Nossos convênios</h1>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-center">
                        <Col sm={3} className="mt-5">
                            <Image src={works01Img} fluid alt="Convênio Unimed" />
                        </Col>

                        <Col sm={3} className="mt-5">
                            <Image src={works02Img} fluid alt="Convênio Bradesco" />
                        </Col>

                        <Col sm={3} className="mt-5">
                            <Image src={works03Img} fluid alt="Convênio Cassin" />
                        </Col>
                    </Row>
                </Container>
            </article>

            <Footer />
        </>
    );
}

export default LandingPage;