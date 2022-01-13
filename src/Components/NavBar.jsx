import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from 'reactstrap';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar color='dark' dark expand='md'>
				<NavbarBrand>MovieRulz</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<NavLink href='/'>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/'>Sign In</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>Watch & Download</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
