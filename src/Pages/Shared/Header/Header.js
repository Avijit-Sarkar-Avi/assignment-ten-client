import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import SideNav from '../SideNav/SideNav';


const Header = () => {

    const { theme, toggleTheme } = useContext(AuthContext);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light" >
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
                        <Nav.Link> <Link className="text-decoration-none text-dark" to='/'>Tutorial</Link> </Nav.Link>
                        <Nav.Link> <Link className="text-decoration-none text-dark" to='/blog'>Blog</Link> </Nav.Link>
                        <Nav.Link>FAQ</Nav.Link>
                        <Nav.Link>
                            <ReactSwitch
                                onChange={toggleTheme} checked={theme === "blue"}
                            ></ReactSwitch>
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant='info' onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className="text-decoration-none text-dark me-3" to='/login'>Login</Link>
                                        <Link className="text-decoration-none text-dark" to='/register'>Register</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle src={user?.photoURL}>
                                </Image>
                                :
                                <FaUser></FaUser>
                            }
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