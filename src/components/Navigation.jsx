import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import usePrefersColorScheme from "use-prefers-color-scheme";

export const Navigation = () => {
  const [mode, setMode] = useState("light");

  // const colorScheme = usePrefersColorScheme();
  // useEffect(() => {
  //   if (mode) {
  //     setMode(colorScheme);
  //   }
  // }, [mode]);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg={mode}
      data-bs-theme={mode}
      className="nav-bar"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home">CW Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About Me</Nav.Link>
            <Nav.Link href="/kitchens">Kitchens</Nav.Link>
            <Nav.Link href="/bathrooms">Bathrooms</Nav.Link>
            <Nav.Link href="/lettings">Lettings</Nav.Link>
            <Nav.Link href="/outbuildings">Outbuildings</Nav.Link>
            <Nav.Link href="/webdev">Web Development</Nav.Link>

            <NavDropdown
              title="
                Services"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/plastering">Plastering</NavDropdown.Item>
              <NavDropdown.Item href="/joinery">Joinery</NavDropdown.Item>
              <NavDropdown.Item href="/plumbing">Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="/tiling">Tiling</NavDropdown.Item>
              <NavDropdown.Item href="/decorating">Decorating</NavDropdown.Item>
              <NavDropdown.Item href="/maintenance">Reactive maintenance</NavDropdown.Item>
              <NavDropdown.Item href="/webdev">Websites / Android apps built</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
