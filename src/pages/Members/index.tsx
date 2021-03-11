import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

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
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="article-text">
                            <p>Despite our size we have successfully negotiated with TAFE’s, Private Training Organisations and Trade Training Centres to ensure students are completing courses that meet their pathway planning and future aspirations.

In 2018 we will be delivering Certificate II in Outdoor Recreation. Our staff will be able to provide outdoor activities available locally and within the region.</p>
                        </Col>
                    </Row>
                </Container>
            </article>

            <Footer />
        </>
    );
}

export default Members;