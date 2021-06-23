import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import {  Context } from '../../context/AuthContext';
import api from '../../service/UserDataService';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";


const Login = () => {
  const { handleLogin, setCurrentUser } = useContext(Context);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [users, setUsers] = useState([]);

const handleSubmit=(e) =>{
  e.preventDefault();
  // email: duan@duan.com
  // senha: 111
  const filteredUser = users.filter(user => filterUser(user));

  if(filteredUser[0]) {
    if (filteredUser[0].password === password) {
      setCurrentUser(filteredUser[0]);
      handleLogin();
      return;
    }

    alert('Incorrect email or password');
    setPassword('');
    return;
  } 

  alert('Fill in the fields correctly');
  return;
}

const filterUser = (user) => {
  if(user && user.email === email) {
    return user;
  }
}
  
const handleEmail=(e) => {
  setEmail(e.target.value)
 }

const handlePassword=(e) =>{
  setPassword(e.target.value)
}

useEffect(()=>{
  api.getUsers().then(res =>
    setUsers(res.data)
  );
}, []);

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Entre com as credenciais</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                    onChange={handleEmail}
                    value={email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    onChange={handlePassword}
                    value={password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Lembrar de mim</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="submit"
                 
                >
                  Entrar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
          <Link to={"/auth/forgotpassword"} className="text-light" data-toggle="collapse">Forgot password?</Link>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Criar uma nova conta</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
