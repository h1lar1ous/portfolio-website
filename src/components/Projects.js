import Container from "react-bootstrap/Container";
import {Col, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2 data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">Projects</h2>
                        <p data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ante nibh. Mauris ornare arcu scelerisque feugiat aliquet. Aliquam tellus est, commodo at auctor nec, placerat ut ipsum.</p>
                        <TabContainer data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" id="projects-tabs" defaultActiveKey="first">
                        <Nav data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row data-aos="flip-down"
                                         data-aos-duration="1500" data-aos-once="true">
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second" style={{textAlign: 'center'}}>Loren Ipsum</TabPane>
                                <TabPane eventKey="three" style={{textAlign: 'center'}}>Loren Ipsum</TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="background-image-right"/>
        </section>
    )
}