import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles.css';
//import logoImg from '../../assets/images/logo-horizontal-branco.svg';
import footerBackground from '../../assets/images/footer-background.svg';

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(${footerBackground})` }}>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;