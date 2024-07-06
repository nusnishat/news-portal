import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
        .then(result =>{})
        .catch(error => console.log(error.message))
    }
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>  
            <div className='d-flex bg-light'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover='false'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar  collapseOnSelect expand="lg" className=" ">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <p><FaUserCircle className='fs-5 mt-3'></FaUserCircle></p>
                        }
                        <Nav.Link>
                            {
                                user? 
                                <Button variant="secondary" onClick={handleLogOut}>Logout</Button>
                                :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    );
};

export default Header;