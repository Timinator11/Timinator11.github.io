import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
    
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto" variant = "underline">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/maps">Maps</Nav.Link>
            </Nav.Item>
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

