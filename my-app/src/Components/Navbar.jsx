import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import "../index.css"
import Cart from './Ecom/Cart';

function NavbarComponent() {
    // const navigate = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Link className='linkStyle' to ="/" >XYZ Store</Link></Navbar.Brand>
          <Nav className="me-auto">
         {/* <Link ><Nav.Link >Home</Nav.Link></Link>     */}
         {/* <Link ><Nav.Link >Home</Nav.Link></Link>     */}
        <Nav.Link > <Link className='linkStyle' to ="/todo" >TodoList </Link> </Nav.Link> 
        <Nav.Link > <Link className='linkStyle' to ="/products" >Products Page </Link> </Nav.Link> 
        <Nav.Link > <Link className='linkStyle' to ="/cart" >Cart Page </Link> </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}

export default NavbarComponent;