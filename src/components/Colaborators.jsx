import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { useState } from 'react'

const Colaborators = () => {

    const dataBase =
        [
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [validate, setValidate] = useState({ isShown: true, msg: '', variant: '' })

    const addColab = (e) => {

        e.preventDefault()

        if (name === '' || email === '') {
            setValidate({ isShown: true, msg: 'Todos los campos son obligatorios', variant: 'warning' })
        }

    }

    return (

        <div className="container">

            <Card>
                <Card.Header className="card-title bg-light text-center " as="h4" >Agrega Colaboradores</Card.Header>

                <Form onSubmit={addColab}>

                    <Form.Group className="m-3" controlId="formBasicText">

                        <Form.Label>Nombre</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Ingresa nombre"
                            onChange={(e) => { setName(e.target.value) }}
                            value={name} />

                    </Form.Group>

                    <Form.Group className="m-3" controlId="formBasicEmail">

                        <Form.Label>Email</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                        />
                    </Form.Group>


                    <Button className=" m-3 text-white " variant="primary" type="submit">
                        Agregar
                    </Button>

                    {validate.isShown ? <Alert className="alert m-3" key={validate.variant} variant={validate.variant}>{validate.msg}</Alert> : null}
                </Form>

            </Card>

            <div className="container">
                <h5>Lista de colaboradores</h5>
                <ul>
                    {dataBase.map(colab =>

                        <li key={colab.id}> {colab.name} - {colab.email}</li>
                    )}


                </ul>
            </div>
        </div>
    )
}

export default Colaborators;