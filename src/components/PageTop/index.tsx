import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Container, Row, Col } from 'react-bootstrap';

import './styles.css';

interface PageHeaderProps {
    backgroundImage: string;
    isBackgroundCenter: boolean;
    title: string;
}

const PageTop: React.FC<PageHeaderProps> = ({ backgroundImage, isBackgroundCenter, title }) => {
    useEffect(() => {
        ScrollReveal().reveal('.section-col-back', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
        ScrollReveal().reveal('.about-header-col', { delay: 375, duration: 1000, origin: 'left', distance: '50%' });
    }, []);

    return (
        <>
            <header className="top-header" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPositionY: isBackgroundCenter ? 'center' : '30%'
            }}
            >
                <Container style={{ height: '100%' }}>
                    <Row style={{ height: '100%', alignItems: 'flex-end' }}>
                        <Col>
                            <div className="top-header-div">
                                <Row>
                                    <div className="section-col-back block-with-text">
                                        <h1 className="top-header-back-h1">{title}</h1>
                                    </div>
                                    <Col className="top-header-col">
                                        <h1 className="top-header-h1">{title}</h1>
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
                            <div className="top-article-div"></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PageTop;