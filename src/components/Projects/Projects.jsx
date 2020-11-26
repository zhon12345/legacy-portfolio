import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Title title="Projects" />
                    <Row>
                        <Col lg={4} sm={12}>
                            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title">Tavern Keeper</h3>
                                    <div>
                                        <p>
                                            Tavern Keeper is a Discord bot that combines features of multiple bots into one feature packed Discord bot. Tavern Keeper boats many awesome features such as Image Manipulation, Moderation, Utilities and many more! With Tavern Keeper you can roast your friends, make your own memes and many more!
					                    </p>
                                    </div>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href='https://discord.com/oauth2/authorize?client_id=722054700308103200&scope=bot&permissions=1007807606'>
                                        Invite Me
				                    </a>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href='https://tavernkeeper.ml'>
                                        View Website
									</a>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                                <div className="project-wrapper__image">
                                    <a href='https://tavernkeeper.ml' target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                                        <Tilt options={{ reverse: false, max: 8, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: 'cubic-bezier(.03,.98,.52,.99)' }}>
                                            <div data-tilt className="thumbnail rounded">
                                                <ProjectImg alt='Tavern Keeper' filename='tavern-keeper.png' />
                                            </div>
                                        </Tilt>
                                    </a>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} sm={12}>
                            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title">Snake Game</h3>
                                    <div>
                                        <p>
                                            This is a simple and modern snake game coded using HTML, CSS and Vanilla JavaScript. You can move the snake with WASD or using the arrow buttons. There is also a counter on the top left that help you keep track of your score.
										</p>
                                    </div>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href='https://zhon12345-snake-game.netlify.app'>
                                        Live Demo
									</a>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href='https://github.com/zhon12345/snake-game'>
                                        Source Code
									</a>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                                <div className="project-wrapper__image">
                                    <a href='https://zhon12345-snake-game.netlify.app' target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                                        <Tilt options={{ reverse: false, max: 8, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: 'cubic-bezier(.03,.98,.52,.99)' }}>
                                            <div data-tilt className="thumbnail rounded">
                                                <ProjectImg alt='Snake Game' filename='snake.png' />
                                            </div>
                                        </Tilt>
                                    </a>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} sm={12}>
                            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title">Calculator</h3>
                                    <div>
                                        <p>
                                            This is a simple calculator coded using HTML, CSS and Vanilla JavaScript. It has all the features of a normal functional calculator. You\'re able to change the color by clicking on the top left button and clicking on one of the colors given.
										</p>
                                    </div>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href='https://zhon12345-calculator.netlify.app'>
                                        Live Demo
									</a>
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href='https://github.com/zhon12345/simple-calculator'>
                                        Source Code
									</a>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                                <div className="project-wrapper__image">
                                    <a href='https://zhon12345-calculator.netlify.app' target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                                        <Tilt options={{ reverse: false, max: 8, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: 'cubic-bezier(.03,.98,.52,.99)' }}>
                                            <div data-tilt className="thumbnail rounded">
                                                <ProjectImg alt='Calculator' filename='calculator.png' />
                                            </div>
                                        </Tilt>
                                    </a>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Projects;
