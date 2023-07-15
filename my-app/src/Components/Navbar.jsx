import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
         <Link ><Nav.Link >Home</Nav.Link></Link>    
         <Link ><Nav.Link >Home</Nav.Link></Link>    
         <Link to="todo"><Nav.Link >TodoList</Nav.Link></Link>  
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}

export default NavbarComponent;