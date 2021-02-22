import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import logoImg from '../../assets/images/logo-horizontal-branco.svg';

function PageHeader() {
    const [show, setShow] = useState(false);

    const navbarControl = () => {
        if (window.scrollY > 300) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl);
        return () => window.removeEventListener('scroll', navbarControl);
    }, []);

    return (
        <>
            <Navbar className="nav-container-top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logoImg}
                            height="60"
                            className="d-inline-block align-top"
                            alt="Clínica Gerar"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar className="nav-container-bottom"
                style={{
                    backgroundColor: show ? 'rgba(0, 58, 60, 1)' : 'rgba(0, 58, 60, 0.8)',
                    boxShadow: show ? 'none' : 'rgb(0 0 0 / 31%) 0px 4px 8px 2px'
                }}
                variant="dark"
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            style={{ opacity: !show ? 1 : 0 }}
                            src={logoImg}
                            height="30"
                            className="align-top nav-brand-bottom"
                            alt="Clínica Gerar"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link nav-header-link-active">INÍCIO</Link>
                            <Link to="/menu/categories" className="nav-link nav-header-link">SOBRE NÓS</Link>
                            <Link to="/restaurant" className="nav-link nav-header-link">AGENDAMENTO</Link>
                            <Link to="/ordering" className="nav-link nav-header-link">CONTATO</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default PageHeader;