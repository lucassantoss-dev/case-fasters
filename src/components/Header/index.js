import React from 'react';
import './style.css';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../../assets/logo.png"

function Header() {
    return (
        <div class="menu" id="menu">
            <Navbar variant="white">
                <Navbar.Brand  href="#home">
                    <div class="logo">
                    <img src={logo} alt="Logo"/>
                    </div>
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#empresa">Empresa</Nav.Link>
                <Nav.Link href="#camisaria">Camisaria</Nav.Link>
                <Nav.Link href="#alfaiataria">Alfaiataria</Nav.Link>
                <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
                <Nav.Link href="#contatos">Contatos</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;