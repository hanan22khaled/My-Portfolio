import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assests/img/logo.svg';
import github from '../assests/img/githup.svg';
import faceb from '../assests/img/faceb.svg';
import link from '../assests/img/link.svg';
import behance from '../assests/img/behance.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={faceb} alt="facebook" /></a>
                            <a href="#"><img src={github} alt="github" /></a>
                            <a href="#"><img src={link} alt="linkedin" /></a>
                            <a href="#"><img src={behance} alt="behance" /></a>

                        </div>
                        <p>Copyright 2025. Developed by Hanan</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}