import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
	return (
		<footer className='footer navbar-static-bottom'>
			<Container>
				<span className='back-to-top'>
					<Link to='header' smooth duration={1000} aria-hidden='true'>
						<i className='fas fa-angle-up fa-2x' />
					</Link>
				</span>
				<div className='social-links'>
					<a
						href='https://discord.gg/jMpw3jw'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='discord'
					>
						<i className='fab fa-discord' />
					</a>
					<a
						href='https://github.com/zhon12345'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='github'
					>
						<i className='fab fa-github' />
					</a>
					<a
						href='https://twitter.com/zhon12345'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='twitter'
					>
						<i className='fab fa-twitter' />
					</a>
					<a
						href='https://dev.to/zhon12345'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='dev'
					>
						<i className='fab fa-dev' />
					</a>
				</div>
				<hr />
				<p className='footer__text'>
					© {new Date().getFullYear()} - Made with ❤ by{' '}
					<a
						href='https://github.com/zhon12345'
						target='_blank'
						rel='noopener noreferrer'
					>
						zhon12345
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
