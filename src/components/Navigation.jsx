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
        <Navbar.Brand href="#home" className='logo'>CW Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About</Nav.Link>
            <NavDropdown
              title="Inside"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/kitchens">Kitchens</NavDropdown.Item>
              <NavDropdown.Item href="/bathrooms">Bathrooms</NavDropdown.Item>
              <NavDropdown.Item href="/lettings">Lettings</NavDropdown.Item>
            </NavDropdown>
           
            <Nav.Link href="/outside">Outside</Nav.Link>
            <Nav.Link href="/webdev">Coding</Nav.Link>
            <Nav.Link href="/ha">Home Automation</Nav.Link>
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
            <Nav.Link href="/glossary">Glossary</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
