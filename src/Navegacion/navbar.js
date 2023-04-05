import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Logo from "../assets/img/LogoHooddie.png" 

function navbar() {
  return (
    
    <><Navbar className='navBg'>
      <Container class="container-fluid">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" class="navbar-nav mx-auto">
              <Nav.Link as={Link} to='/' className='menus'><p className='menus'>Inicio</p></Nav.Link>
              <Nav.Link as={Link} to='/catalogo' className='menus'><p className='menus'>Catalogo</p></Nav.Link>

                <Navbar.Brand as={Link} to="/">
                  <h1 className='Logo'>
                    Hooddie_X
                  </h1>
                </Navbar.Brand>

              <Nav.Link as={Link} to='/contactanos' className='menus'><p className='menus'>Contactanos</p></Nav.Link>
              <Nav.Link as={Link} to='/quienessomos' className='menus'><p className='menus'>Quienes Somos</p></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar><section>
        <Outlet>

        </Outlet>
      </section></>

    
  );
}

export default navbar;