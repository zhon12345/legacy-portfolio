import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
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
		<section id='about'>
			<Container>
				<Title title='About Me' />
				<Row className='about-wrapper'>
					<Col md={6} sm={12}>
						<Fade bottom duration={1000} delay={600} distance='30px'>
							<div className='about-wrapper__image'>
								<AboutImg alt='profile picture' filename='profile.jpg' />
							</div>
						</Fade>
					</Col>
					<Col md={6} sm={12}>
						<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance='30px'>
							<div className='about-wrapper__info'>
								<p className='about-wrapper__info-text'>Hello there! I see you have stumbled upon my about page so let me introduce myself.</p>
								<p className='about-wrapper__info-text'>
									My name is Ng Zhun Onn who currently is a full-time student based in Kuala Lumpur, Malaysia. I mainly work on Discord bots such as{' '}
									<a className='about-wrapper__info-text' href='https://github.com/zhon12345/Tavern_Keeper'>
										Tavern Keeper
									</a>
									. However, I've started getting into web development lately, and I've created a few projects that you can check out below.
								</p>
								<p className='about-wrapper__info-text'>Not to mention that I am also a HUGE tech geek that is interested in all things related to computer hardware. I hope you like my projects and find them engaging in any way, shape, or form. Thanks for reading this, and I wish you a good day!</p>
								{/* <span className="d-flex mt-3">
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--resume"
                                href="https://github.com/zhon12345"
                                >
                                Resume
                                </a>
                                </span> */}
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
