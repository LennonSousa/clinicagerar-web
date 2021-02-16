import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import './styles.css'

import ImageSlide01 from '../../assets/images/slide-item-01.png';
import ImageSlide02 from '../../assets/images/slide-item-02.png';

import carouselImgBottom from '../../assets/images/header-carousel-bottom.svg';

function LandingPage() {
    return (
        <div>
            <header>
                <PageHeader />
                <Carousel indicators={true} nextLabel="" prevLabel="" interval={5000} fade={true}>
                    <Carousel.Item style={{ backgroundColor: '#003A3C' }}>
                        <Container>
                            <Row className="header-carousel-row">
                                <Col className="header-carousel-col" style={{ backgroundImage: `url(${ImageSlide01})` }}>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item style={{ backgroundColor: '#F97352' }}>
                        <Container>
                            <Row className="header-carousel-row">
                                <Col className="header-carousel-col" style={{ backgroundImage: `url(${ImageSlide02})` }}>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </header>

            <div className="middle-container">
                <div className="middle-waves top" >
                    <div className="header-img-bottom-reverse-front" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>
                    <div className="header-img-bottom" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>
                    <div className="header-img-bottom-reverse" style={{ backgroundImage: `url(${carouselImgBottom})` }}></div>

                    <Container className="middle-section">
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;