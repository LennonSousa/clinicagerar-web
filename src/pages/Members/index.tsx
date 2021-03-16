import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import PageTop from '../../components/PageTop';
import Footer from '../../components/Footer';
import { Member } from '../../components/Members';

// Datas
import membersList from '../../data/members';

import './styles.css';

interface MembersRouteParams {
    url: string;
}

function Members() {
    const { url } = useParams() as MembersRouteParams;
    const [member, setMember] = useState<Member>()

    useEffect(() => {
        const memberFound = membersList.find(item => { return item.url === url });

        if (memberFound) {
            setMember(memberFound);
        }
    }, [url]);

    return (
        <>
            <PageHeader activeLink="about" />

            <PageTop backgroundImage={member ? member.cover : ''} isBackgroundCenter={false} title={member ? member.title : ''} />

            <article>
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col sm={9}>
                            <h2 className="article-title">{`Sou especialista em ${member?.specialist}`}</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5 justify-content-center">
                        <Col className="article-text" sm={5}>
                            <p>{member?.description}</p>
                        </Col>
                        <Col className="article-text" sm={4}>
                            <Image className="members-article-image" fluid src={member?.articleImage} alt={member?.title} />
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5 justify-content-center">
                        <Col sm={9}>
                            <h2 className="article-title">Tratamentos</h2>
                        </Col>
                        <Col className="article-text" sm={9}>
                            <p>{member?.treatments}</p>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5 justify-content-center">
                        <Col className="article-text" sm={9}>
                            <p>{`Formação: ${member?.university}`}</p>
                        </Col>
                    </Row>
                </Container>
            </article>

            <Footer />
        </>
    );
}

export default Members;