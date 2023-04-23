import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react'

const dataBase = [ //designando a una constanste el arreglo de objetos
            {
                "id": "1",
                "name": "Colaborador 1",
                "email": "colaborador1@colaborador.com"
            },

            {
                "id": "2",
                "name": "Colaborador 2",
                "email": "colaborador2@colaborador.com"
            },

            {
                "id": "3",
                "name": "Colaborador 3",
                "email": "colaborador3@colaborador.com"
            }
        ]

const Collaborators = () => {

    const [name, setName] = useState(''); // asignar un estado a name / state inicial de name vacío
    const [email, setEmail] = useState(''); // asignar un estado a email /state inicial de email vacío
    const [list, setList] = useState(dataBase);
    const [newList, setNewList] = useState(dataBase);

    const addCollab = (e) => { //enviar el formulario para agregar a un colaborador / submit

        e.preventDefault()

        setList([...list,
        {
            id: Date.now(),
            name: name,
            email: email

        }]);

        setNewList([...newList,

        {
            id: Date.now(),
            name: name,
            email: email
        }])

    }

    const inputName = (e) => {

        setName(e.target.value);
    }
    const inputEmail = (e) => {

        setEmail(e.target.value);
    }

    const inputSearch = (e) => {

        e.preventDefault()

        if (e.target.value === "") {
            setList(newList)
        }

        else {
            let searchCollab = newList.filter(c => c.name.includes(e.target.value));
            setList(searchCollab)
        }



    }



    return (
        
        <div>
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
                                onChange = {(e) => {inputSearch(e)}} 
                            />
                           
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container">

                <Card>
                    <Card.Header className="card-title bg-light text-center " as="h4" >Agrega Colaboradores</Card.Header>

                    <Form onSubmit={addCollab}>

                        <Form.Group className="m-3" controlId="formBasicText">

                            <Form.Label>Nombre</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Ingresa nombre"
                                onChange={ inputName }
                                value={name} />

                        </Form.Group>

                        <Form.Group className="m-3" controlId="formBasicEmail">

                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange= { inputEmail}
                                value={email}
                            />
                        </Form.Group>


                        <Button className=" m-3 text-white " variant="primary" type="submit">
                            Agregar
                        </Button>

                    </Form>

                </Card>

                <div className="container">
                    <h5>Lista de colaboradores</h5>
                    <ul>
                        {list.map(collab =>

                            <li key={collab.id}> {collab.name} - {collab.email}</li>
                        )}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Collaborators;