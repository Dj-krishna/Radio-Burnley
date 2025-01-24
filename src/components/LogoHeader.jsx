import React, { useState } from "react";
import {
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
  Accordion,
  Button,
} from "react-bootstrap";
import "../styles/LogoHeader.css";
import logo from "../assets/radio-burnley.png";
import "../styles/PageHeader.css";

const LogoHeader = () => {
  const [show, setShow] = useState(false);
  const [showScheduleAlert, setShowScheduleAlert] = useState(false);
  const [showShowsAlert, setShowShowsAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScheduleClick = () => {
    setShowScheduleAlert(true);
    setTimeout(() => setShowScheduleAlert(false), 2000);
  };

  const handleShowsClick = () => {
    setShowShowsAlert(true);
    setTimeout(() => setShowShowsAlert(false), 2000);
  };

  return (
    <header className="logo-header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <Image
              src={logo}
              alt="Radio Burnley Logo"
              className="responsive-logo"
            />
          </div>
          <Navbar expand={false} className="mobile-nav">
            <Container fluid>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={handleShow}
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                show={show}
                onHide={handleClose}
                className="bg-white"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Schedule</Accordion.Header>
                      <Accordion.Body>
                        <Button 
                          variant="outline-secondary" 
                          className="w-100" 
                          onClick={handleScheduleClick}
                        >
                          Coming Soon!
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Shows</Accordion.Header>
                      <Accordion.Body>
                        <Button 
                          variant="outline-secondary" 
                          className="w-100" 
                          onClick={handleShowsClick}
                        >
                          Coming Soon!
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
        <Navbar
          className="px-2 py-0 desktop-nav"
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Container fluid>
            <Navbar.Brand href="#">Listen now</Navbar.Brand>
            <Nav className="desktop-nav-options">
              <NavDropdown title="Schedule" id="schedule-dropdown">
                <NavDropdown.Item onClick={handleScheduleClick}>
                  Coming Soon!
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shows" id="shows-dropdown">
                <NavDropdown.Item onClick={handleShowsClick}>
                  Coming Soon!
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        {showScheduleAlert && (
          <div className="alert-popup">Schedule feature coming soon!</div>
        )}
        {showShowsAlert && (
          <div className="alert-popup">Shows feature coming soon!</div>
        )}
      </div>
    </header>
  );
};

export default LogoHeader;
