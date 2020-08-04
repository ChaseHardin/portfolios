import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AppContext } from '../app-context';
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validateUser } from './user-login-service';
import Alert from 'react-bootstrap/Alert';

export const UserLogin = () => {
    const { appState, setAppState } = React.useContext(AppContext);
    const [login, setLogin] = React.useState({});

    const handleEvent = (event, propName) => setLogin({ ...login, [propName]: event.target.value });
    const handleUsername = (event) => handleEvent(event, 'username');
    const handlePassword = (event) => handleEvent(event, 'password')

    const handleOnSubmit = async () => {
        const userInfo = await validateUser(login.username, login.password);

        if (userInfo) {
            setAppState({ ...appState, isAuthenticated: true });
        } else {
            setLogin({ ...login, hasError: true })
        }
    };

    const renderError = () => {
        return login.hasError && <Alert variant='danger'>Username and/or password is incorrect.</Alert>;
    }

    return (
        <div style={{ marginTop: '8rem' }}>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={faCubes} size={'10x'} />
                    </div>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Username" onChange={handleUsername} />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                        </Form.Group>
                        {renderError()}
                        <Button variant="dark" onClick={handleOnSubmit}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}