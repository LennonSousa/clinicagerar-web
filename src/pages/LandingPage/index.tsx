import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import './styles.css'

function LandingPage() {
    return (
        <div>
            <header>
                <PageHeader />
                <Carousel controls={false} indicators={true} interval={4000} fade={true}>
                    <Carousel.Item>
                        <div className="header-carousel-item">

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="header-carousel-item-2">

                        </div>
                    </Carousel.Item>
                </Carousel>
            </header>

            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;