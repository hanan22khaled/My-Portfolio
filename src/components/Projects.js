import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Projectcards } from "./Projectcards";
import project1 from "../assests/img/fr.png";
import project2 from "../assests/img/bu.png";
import project3 from "../assests/img/co.png";
import project4 from "../assests/img/proj4.png";
import project5 from "../assests/img/proj5.png";
import project6 from "../assests/img/proj6.png";
import colorSharp2 from "../assests/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const webprojects = [
        {
            title: "Furniture Website",
            description: "Design & Development",
            imgUrl: project1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: project2,
        },
        {
            title: "Courses",
            description: "Design & Development",
            imgUrl: project3,
        },
        

    ];
    const Designprojects = [
        
        {
            title: "Blu Mountain Website",
            description: "Design & Development",
            imgUrl: project4,
        },
        {
            title: "Offer Details Card",
            description: "Design & Development",
            imgUrl: project5,
        },
        {
            title: "Saey company page",
            description: "Design & Development",
            imgUrl: project6,
        },

    ];
    const Allprojects = [
        {
            title: "Furniture Website",
            description: "Design & Development",
            imgUrl: project1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: project2,
        },
        {
            title: "Courses",
            description: "Design & Development",
            imgUrl: project3,
        },
        {
            title: "Blu Mountain Website",
            description: "Design & Development",
            imgUrl: project4,
        },
        {
            title: "Offer Details Card",
            description: "Design & Development",
            imgUrl: project5,
        },
        {
            title: "Saey company page",
            description: "Design & Development",
            imgUrl: project6,
        },

    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Look at My Works</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Web</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Design</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">All</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        webprojects.map((project, index) => {
                                                            return (
                                                                <Projectcards
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        Designprojects.map((project, index) => {
                                                            return (
                                                                <Projectcards
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                  
                                                  </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        Allprojects.map((project, index) => {
                                                            return (
                                                                <Projectcards
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                    </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}