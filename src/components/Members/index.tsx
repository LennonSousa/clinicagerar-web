import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './styles.css'

export interface Member {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface MembersProps {
    member: Member;
}

const Members: React.FC<MembersProps> = ({ member }) => {
    return (
        <Col className="member-container col-11 text-center" md={4} >
            <div className="member-item pt-3 pb-3">
                <Row className="member-image-row">
                    <Col className="member-image-col">
                        <Image fluid className="member-image" src={member.image} />
                    </Col>
                </Row>

                <Row className="member-description-row pt-3 pb-3">
                    <Col>
                        <h3 className="member-title">Nome do médico</h3>
                        <h6 className="member-sub-title">Especialidade do médido.</h6>
                    </Col>
                </Row>

                <Row className="member-button-row">
                    <Col>
                        <button className="button-standard" type="button">Agendar por e-mail</button>
                    </Col>
                </Row>
            </div>

        </Col>
    )
}

export default Members;