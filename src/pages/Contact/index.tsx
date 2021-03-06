import React, { useState } from 'react';
import { Container, Row, Col, Form, Spinner, Modal, Button, Image } from 'react-bootstrap';
import { FaMapSigns, FaPhoneAlt, FaRegEnvelope, FaWhatsapp, FaRegPaperPlane } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import PageHeader from '../../components/PageHeader';
import PageTop from '../../components/PageTop';
import Footer from '../../components/Footer';

import headerImage from '../../assets/images/capa-contato.jpg';
import sentMessageImage from '../../assets/images/undraw_message_sent_1030.svg';
import errorMessageImage from '../../assets/images/undraw_page_not_found_su7k.svg';

import './styles.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Obrigatório!'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório!'),
    phone: Yup.string().required('Obrigatório!'),
    message: Yup.string().required('Obrigatório!')
});

function Contact() {
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const [isSentSuccessful, setIsSentSuccessful] = useState(false);

    const [showModalMessage, setShowModalMessage] = useState(false);

    const handleClose = () => setShowModalMessage(false);
    const handleShow = () => setShowModalMessage(true);

    return (
        <>
            <PageHeader activeLink="contact" />

            <PageTop backgroundImage={headerImage} title="Contato" />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Estamos prontos para lhe atender.</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="mt-5" sm={4}>
                            <div className="contact-item-div">
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaMapSigns size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h2>Nosso endereço</h2></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>Av. Bernardo Sayão, 3650</p>
                                                <p>Medical Center, 5º andar, sala 501</p>
                                                <p>Bairro Três Poderes</p>
                                                <p>Imperatriz - MA</p>
                                                <p>65903-075</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col className="mt-5" sm={4}>
                            <div className="contact-item-div">
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaPhoneAlt size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h2>Nossos telefones</h2></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>Secretária Dr. Evaldo Reis Silva</p>
                                                <p><FaWhatsapp /> 99 99109-1718</p>
                                                <p className="mt-4">Secretária Dra. Cristina Célia Andrade</p>
                                                <p><FaWhatsapp /> 99 98809-0998</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col className="mt-5" sm={4}>
                            <div className="contact-item-div">
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaRegEnvelope size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h2>Nossos e-mails</h2></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>contato@clinicageraritz.com.br</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>

            <section className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col><h2 className="article-title">Você também pode enviar um e-mail por aqui mesmo. Preencha o formulário abaixo e envia a mensagem.</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    message: ''
                                }}
                                onSubmit={async values => {
                                    setIsSendingMessage(true);

                                    console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_USER_ID);

                                    try {
                                        if (process.env.REACT_APP_SERVICE_ID &&
                                            process.env.REACT_APP_TEMPLATE_ID && process.env.REACT_APP_USER_ID) {
                                            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_USER_ID)
                                                .then((result) => {
                                                    setIsSentSuccessful(true);

                                                    setIsSendingMessage(false);

                                                    handleShow();

                                                    values.name = "";
                                                    values.email = "";
                                                    values.phone = "";
                                                    values.message = "";
                                                }, (error) => {
                                                    setIsSentSuccessful(false);
                                                    setIsSendingMessage(false);

                                                    handleShow();
                                                });
                                        }
                                        else {
                                            setIsSentSuccessful(false);
                                            setIsSendingMessage(false);

                                            handleShow();
                                        }

                                    }
                                    catch (err) {
                                        setIsSentSuccessful(false);
                                        setIsSendingMessage(false);

                                        handleShow();
                                    }
                                }}
                                validationSchema={validationSchema}
                            >
                                {({ handleChange, handleSubmit, values, errors, isValid }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group className="mb-4" controlId="formContactName">
                                                    <Form.Label>Nome</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.name}
                                                        name="name"
                                                        isInvalid={!!errors.name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formContactEmail">
                                                    <Form.Label>Seu e-mail</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        name="email"
                                                        isInvalid={!!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formContactPhone">
                                                    <Form.Label>Seu telefone</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.phone}
                                                        name="phone"
                                                        isInvalid={!!errors.phone}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>

                                            <Col sm={6}>
                                                <Form.Group controlId="formContactMessage">
                                                    <Form.Label>Sua menssagem</Form.Label>
                                                    <Form.Control type="text"
                                                        as="textarea"
                                                        rows={3}
                                                        onChange={handleChange}
                                                        value={values.message}
                                                        name="message"
                                                        isInvalid={!!errors.message}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end text-center mt-3">
                                            <Col sm={2}>
                                                <button className="button-standard" disabled={isValid ? false : true} type="submit">{
                                                    isSendingMessage ? <>Enviando <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    /></> : <><FaRegPaperPlane /> Enviar mensagem</>
                                                }</button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={showModalMessage} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: "#003A3C", fontWeight: 600 }}>{isSentSuccessful ? "Sua mensagem foi enviada com sucesso!" : "Erro ao enviar mensagem."}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mt-4 mb-4 justify-content-center align-items-center text-center">
                        <Col sm={5}>
                            {
                                isSentSuccessful ? <Image fluid src={sentMessageImage} alt="Mensagem enviada com sucesso!" /> :
                                    <Image fluid src={errorMessageImage} alt="Mensagem não enviada!" />
                            }
                        </Col>

                        <Col className="mt-5" sm={5}>
                            {
                                isSentSuccessful ? <><Row>
                                    <Col>
                                        <h6>Iremos retornar o mais breve possível.</h6>
                                    </Col>
                                </Row>

                                    <Row>
                                        <Col>
                                            <h6>Obrigado.</h6>
                                        </Col>
                                    </Row></> :
                                    <><Row>
                                        <Col>
                                            <h6>Infelizmente a sua mensagem não foi enviada.</h6>
                                        </Col>
                                    </Row>
                                        <Row>
                                            <Col>
                                                <h6>Tente enviar por outro meio ou tente novamente mais tarde.</h6>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tudo bem!
                    </Button>
                </Modal.Footer>
            </Modal>

            <Footer />
        </>
    );
}

export default Contact;