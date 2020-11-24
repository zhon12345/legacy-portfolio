import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import { Container } from "react-bootstrap"
import { Link } from 'react-scroll';
import logo from "../../images/favicon.png"

const Header = () => {
	return (
		<header id="header" sticky="top" className="main">
			<Container>
				<Navbar collapseOnSelect expand="sm" variant="dark">
					<Navbar.Brand href="#">
						<img src={logo} alt="logo" width="50" height="50" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar" />
					<Navbar.Collapse id="responsive-navbar">
						<Nav className="ml-auto">
							<Link className="nav-link" smooth duration={1000} to="hero">Home</Link>
							<Link className="nav-link" smooth duration={1000} to="about">About Me</Link>
							<Link className="nav-link" smooth duration={1000} to="projects">Projects</Link>
							<Link className="nav-link" smooth duration={1000} to="contact">Contact Me</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	)
}

export default Header
