import { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { auth } from "../../db/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../context/UserContext";
import { setUserId } from "firebase/analytics";

export const Navigation = () => {
  const [mode, setMode] = useState("light");

  const {user,setUser} = useContext(UserContext);
  const [isAdmin,setIsAdmin] = useState(false);

  const colorScheme = usePrefersColorScheme();
//auth listener to auto manage user state
  useEffect(()=>{
    const unsubscribe=(onAuthStateChanged(auth,(newuser)=>{
      if(newuser){
        console.log(newuser.displayName)
        setUser(newuser);
        if(newuser.displayName==='Chris Wilson'){
          setIsAdmin(true)
        }
      }
      else{
        setUser(null)
        setIsAdmin(false)
      }
    }))
    return (()=>unsubscribe())

  },[user])

  useEffect(() => {
    if (mode) {
      setMode(colorScheme);
    }



  }, [mode]);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg={mode}
      data-bs-theme={mode}
      className="nav-bar"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="logo">
          CW Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About</Nav.Link>
            {/* <NavDropdown
              title="Inside"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/kitchens">Kitchens</NavDropdown.Item>
              <NavDropdown.Item href="/bathrooms">Bathrooms</NavDropdown.Item>
              <NavDropdown.Item href="/miscinternal">Miscellaneous</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Outside"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/externalJoinery">Timber</NavDropdown.Item>
              <NavDropdown.Item href="/externalMasonary">Masonary</NavDropdown.Item>
              <NavDropdown.Item href="/miscexternal">Miscellaneous</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link href="/webdev">Coding</Nav.Link>
            <Nav.Link href="/ha">Automation</Nav.Link>
            <NavDropdown
              title="
                Services"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/plastering">Plastering</NavDropdown.Item>
              <NavDropdown.Item href="/joinery">Joinery</NavDropdown.Item>
              <NavDropdown.Item href="/plumbing">Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="/tiling">Tiling</NavDropdown.Item>
              <NavDropdown.Item href="/glazing">Glazing</NavDropdown.Item>
              <NavDropdown.Item href="/decorating">Decorating</NavDropdown.Item>
              <NavDropdown.Item href="/maintenance">
                Reactive maintenance
              </NavDropdown.Item>
              <NavDropdown.Item href="/webdev">
                Websites / Android apps built
              </NavDropdown.Item>
            </NavDropdown>
            {!user&&<Nav.Link href="/signIn">Sign In</Nav.Link>}
            {user&&<Nav.Link href="/signOut">Sign Out</Nav.Link>}

            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <Nav.Link href="/glossary">Glossary</Nav.Link> */}
            {isAdmin && <Nav.Link href="/manage">Manage</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
