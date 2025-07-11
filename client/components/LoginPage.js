import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { manualLoginSuccess, manualLogoutSuccess } from '../redux/authActions';

const LoginPage = props => {
  //useDispatch = return store.dispatch
  const dispatch = useDispatch();
  //Login succesfully returns data to update state with
  const onSuccess = googleUser => {
    console.log(googleUser);
    //uses thunk to update state  after the effects have been applied to component
    dispatch(loginSuccess(googleUser));
  }
  const onFailure = error => {
    console.log(error)
  }

  const history = useHistory();

  const handleClick = () => {
    dispatch()
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="info">
            <h1>PACEÑO CIUDADANO</h1>
            <hr />
            <h6>Registrate para tus quejas</h6>
            <p>Mejora la ciudad de LA PAZ BCS en esta aplicacion</p>
            <GoogleLogin
            clientId="591081752316-fisf1og4etovgh35bcg1l99kdo5bgd2r.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            />
            <hr />
            <div>
              <h6>Iniciar sesion con Google:</h6>
              <Form className="needs-validation">
                <Form.Group controlId="formEmail">
                  <Form.Label>Correo Electronico:</Form.Label>
                  <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="text" placeholder="Keep it secret, keep it safe" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Form.Group>
                <Button onClick={() => {
                  handleClick();
                }}>Iniciar Sesion</Button>
              </Form>
            </div>
            <hr />
            <div>
              <h5>¿Primera Vez?</h5>
              <Button onClick={() => {
                // redirect to Registration
                history.push("/signup")
              }}>Registrarse</Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
)
}

export default LoginPage;