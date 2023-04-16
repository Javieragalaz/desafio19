import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

    return (
        <Navbar className="navBar" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Búsqueda de colaboradores</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ingresa nombre de colaborador"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header