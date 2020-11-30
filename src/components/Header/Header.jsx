import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';

const Header = () => {
	return (
		<Headroom
			style={{
				webkitTransition: 'all .5s ease-in-out',
				mozTransition: 'all .5s ease-in-out',
				oTransition: 'all .5s ease-in-out',
				transition: 'all .5s ease-in-out',
			}}
		>
			<header id='header' className='main'>
				<Container>
					<Navbar collapseOnSelect expand='sm' variant='dark'>
						<Navbar.Toggle aria-controls='responsive-navbar' />
						<Navbar.Collapse id='responsive-navbar'>
							<Nav className='ml-auto'>
								<Link className='nav-link' smooth duration={1000} to='hero'>
									Home
								</Link>
								<Link className='nav-link' smooth duration={1000} to='about'>
									About Me
								</Link>
								<Link className='nav-link' smooth duration={1000} to='projects'>
									Projects
								</Link>
								<Link className='nav-link' smooth duration={1000} to='contact'>
									Contact Me
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</header>
		</Headroom>
	);
};

export default Header;
