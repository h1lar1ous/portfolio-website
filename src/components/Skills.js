import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills" data-aos="fade-down" data-aos-duration="1350" data-aos-once="true">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ante nibh. Mauris ornare arcu scelerisque feugiat aliquet. Aliquam tellus est, commodo at auctor nec, placerat ut ipsum.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item" data-aos="fade-up" data-aos-duration="1600">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item" data-aos="fade-up" data-aos-duration="1600">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item" data-aos="fade-up" data-aos-duration="1600">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item" data-aos="fade-up" data-aos-duration="1600">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left"/>
        </section>
    )
}