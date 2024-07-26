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
        <Navbar.Brand href="#home">CW Property Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title="
                Services"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/plastering">Plastering</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
