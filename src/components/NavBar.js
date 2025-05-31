import { Navbar, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assests/img/logo.svg';
import github from '../assests/img/githup.svg';
import faceb from '../assests/img/faceb.svg';
import link from '../assests/img/link.svg';
import behance from '../assests/img/behance.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onscroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onscroll);
        return () => window.removeEventListener("scroll", onscroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <HashLink
                                smooth
                                to="#home"
                                className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </HashLink>
                            <HashLink
                                smooth
                                to="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </HashLink>
                            <HashLink
                                smooth
                                to="#projects"
                                className={activeLink === 'projects' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </HashLink>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={faceb} alt="facebook" /></a>
                                <a href="#"><img src={github} alt="github" /></a>
                                <a href="#"><img src={link} alt="linkedin" /></a>
                                <a href="#"><img src={behance} alt="behance" /></a>
                            </div>
                            <HashLink smooth to="#connect">
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;
