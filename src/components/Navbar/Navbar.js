import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNew() {
    return (
        <>
            <div style={{width:"100%"}}>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>

    );
}

export default NavbarNew;