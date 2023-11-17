import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";
    
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav variant = "underline">

            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>

            <NavDropdown title="Maps">
              <NavDropdown.Item href="/maps">QGIS Map</NavDropdown.Item>
              <NavDropdown.Item href="/drought">Drought.gov Map</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
                <Nav.Link href="/info">Info</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/sources">Sources</Nav.Link>
            </Nav.Item>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

