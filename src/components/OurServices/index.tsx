import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css'

export interface OurService {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface OurServicesProps {
    ourService: OurService;
}

const OurServices: React.FC<OurServicesProps> = ({ ourService }) => {
    return (
        <Col className="service-col col-11" sm={4} >
            <div className="service-image" style={{ backgroundImage: `url(${ourService.image})` }} >
                <div className="service-row-title justify-content-center">
                    <div className="service-col-title">
                        <h3>{ourService.title}</h3>
                    </div>
                </div>

                <div className="service-overlap">
                    <Row className="service-overlap-row">
                        <Col>
                            <p>{ourService.description}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}

export default OurServices;