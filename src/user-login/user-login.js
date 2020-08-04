import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AppContext } from '../app-context';
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserLogin = () => {
    const { appState, setAppState } = React.useContext(AppContext);

    const handleOnSubmit = () => setAppState({
        ...appState,
        isAuthenticated: true
    });

    return (
        <div style={{ marginTop: '8rem' }}>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                <div style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon icon={faCubes} size={'10x'} />
                </div>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark" onClick={handleOnSubmit}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}