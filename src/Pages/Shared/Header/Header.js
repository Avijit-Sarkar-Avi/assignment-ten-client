import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';


const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <img
                    src="https://cdn2.vectorstock.com/i/1000x1000/53/36/robotics-robot-programming-icon-vector-28815336.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand > <Link className="text-decoration-none text-dark" to='/'>Programming Course</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNav></SideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;