// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
// function NavbarNew() {
//     return (
//         <>
//             <div className='div-navbar' style={{width:"100%",backgroundColor:'#141414'}}>
//                 <Navbar bg="dark" variant="dark">
//                     <Container>
//                         <Navbar.Brand style={{color:"#e50914"}} href="#home">Netflix</Navbar.Brand>
//                         <Nav className="me-auto">
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#features">Favorite</Nav.Link>
//                         </Nav>
//                     </Container>
//                 </Navbar>
//             </div>
//         </>

//     );
// }

// export default NavbarNew;

import React from 'react';
import { Link } from 'react-router-dom';

const NavbarNew = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Netflix
      </Link>
      
      <div className="navbar-menu">
        <Link to="/" className="navbar-menu-item">
        Home
        </Link>
        <Link to="/favorite" className="navbar-menu-item">
        Favorite
        </Link>
        
      </div>
    </nav>
  );
};

export default NavbarNew;