import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/PageHeader.css";

const PageHeader = () => {
  return (
    <Navbar className="px-2 py-0" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Listen now</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Schedule</Nav.Link>
          <Nav.Link href="#">Shows</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageHeader;
