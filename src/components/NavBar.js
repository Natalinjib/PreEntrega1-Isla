import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>NatStore</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Inicio</Nav.Link>
            <Nav.Link href='#tech'>Tecnología</Nav.Link>
            <Nav.Link href='#women'>Ropa Mujeres</Nav.Link>
            <Nav.Link href='#men'>Ropa Hombres</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
