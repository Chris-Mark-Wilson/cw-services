import { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { auth } from "../../db/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../context/UserContext";
import { CountContext } from "../context/CountContext";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api/firebase_api";



export const Navigation = () => {

  const navigate=useNavigate();
  const [mode, setMode] = useState("light");
  const [expanded, setExpanded] = useState(false);
  const {user,setUser} = useContext(UserContext);
  const [isAdmin,setIsAdmin] = useState(false);
  const [categories,setCategories]=useState([]);


  const colorScheme = usePrefersColorScheme();
  const {color, setColor,backgroundColor,setBackgroundColor} = useContext(CountContext);

  useEffect(() => {
    console.log("color changed:",color);
    console.log(document.body.style);
    document.getElementById('root').style.setProperty('color', color, 'important');
    document.getElementById('root').style.setProperty('background-color', backgroundColor, 'important');
  
  }, [color,backgroundColor]);




  useEffect(()=>{
    const getCategories=async()=>{
      try{
        // console.log('getCategories fired in effect');
        const categories = await getAllCategories();
        if(categories.length>0){
          setCategories(categories);
        }
        else{
          setCategories([]);
        }
      }
      catch(error){
        console.log(error);
      }
    }
    getCategories();
    //ffs  sake do not put categories in the dependency array
  },[categories.length])


//auth listener to auto manage user state
  useEffect(()=>{
        const unsubscribe=(onAuthStateChanged(auth,(newUser)=>{
      if(newUser){
    
//DO NOT SHALLOW COPY THIS`OBJECT, it has methods and functions on it

        //check for admin status
        newUser.getIdTokenResult()
        .then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
       

            //add isAdmin property to auth user object
            newUser.isAdmin = true;
            setIsAdmin(true);

            setUser(newUser);
          } else {
            newUser.isAdmin = false;
          }
       

          if (newUser.photoURL === null) {
         
            newUser.photoURL = "/images/user.png";
          }
        
          // DIRECT COPY OF OBJECT
          setUser(newUser);
          //check user is verified email
          if (!newUser.emailVerified) {
         
            navigate("/signIn");
          }
        })
    }
      else{
        
        setUser(null)
    
        setIsAdmin(false)
      }
  
    }))
    return (()=>unsubscribe())

  },[])

  useEffect(() => {
    if (mode) {
      setMode(colorScheme);
    }



  }, [mode]);


  const handleNavigate = (category) => {
    navigate(`/gallery/${category.id}`, { state: { id: category.id, name: category.name } });
    setExpanded(false); // Close the navigation menu
  };

  return (
    <>
    <Navbar
      sticky="top"
      expand="sl"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      data-bs-theme={mode}
      className="nav-bar"
      style={{ backgroundColor: mode === "dark" ? "#333" : "#fff" }}
    >
      <Container className="navbar-container">
        <Navbar.Brand href="/" className="logo">
          CMWILSON.CO.UK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About</Nav.Link>
             <NavDropdown
              title="Galleries"
              id="basic-nav-dropdown"
            >
             {categories && categories.map((category) => (
        <NavDropdown.Item
          key={category.id}
          onClick={() => handleNavigate(category)}
        >
          {category.name}
        </NavDropdown.Item>
      ))}
             
            </NavDropdown>

            <Nav.Link href="/webdev">Coding</Nav.Link>
            <Nav.Link href="/ha">Automation</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
              
           
            
            {!user&&<Nav.Link href="/signIn">Sign In</Nav.Link>}
           
            {user &&<NavDropdown title={<img src={user.photoURL}/>} id='basic-nav-dropdown'>
            <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            </NavDropdown>}
            

            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* <Nav.Link href="/glossary">Glossary</Nav.Link> */}
            {isAdmin && <Nav.Link href="/manage">Admin</Nav.Link>}
          </Nav>

    <div className="nav-spacer" style={{height:'100px'}}>
      <span>Text Color</span>
      <input type='color' value={color} onChange={(e)=>setColor(e.target.value)} />
      <span>Background Color</span>
      <input type='color' value={backgroundColor} onChange={(e)=>setBackgroundColor(e.target.value)} />
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
