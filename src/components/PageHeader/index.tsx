import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import logoImg from '../../assets/images/logo-horizontal-branco.svg';

function PageHeader() {
    return (
        <div className="nav-container">
            <Container>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src={logoImg}
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">INÍCIO</Link>
                            <Link to="/menu/categories" className="nav-link">SOBRE NÓS</Link>
                            <Link to="/restaurant" className="nav-link">AGENDAMENTO</Link>
                            <Link to="/ordering" className="nav-link">CONTATO</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default PageHeader;