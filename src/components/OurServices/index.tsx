import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';

import ourServicesBackground from '../../assets/images/our-services-background.svg';

import './styles.css'

export interface OurService {
    id: number;
    title: string;
    image: string;
}

interface OurServicesProps {
    ourService: OurService;
}

const OurServices: React.FC<OurServicesProps> = ({ ourService }) => {
    return (
        <Col className="service-col col-11 mt-3 mb-3" md={6} lg={3} >
            <div className="service-container">
                <div className="service-container-background"></div>
                <div className="service-container-background-hidden"></div>
                <div className="service-content" style={{ backgroundImage: `url(${ourServicesBackground})` }} >
                    <Row className="service-content-row justify-content-center align-items-center">
                        <Col className="col-5" sm={6}>
                            <Image className="service-content-icon" src={ourService.image} alt={ourService.title} fluid />
                        </Col>
                        <Col sm={10}>
                            <h3 className="service-content-title">{ourService.title}</h3>
                        </Col>
                        <Col sm={10}>
                            <Link to="/our-services" className="service-content-more nav-link">Saber mais <FaAngleRight size={20} /></Link>
                        </Col>
                    </Row>
                </div>
            </div>

        </Col>
    )
}

export default OurServices;