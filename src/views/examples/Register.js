import React, { useState, useContext } from "react";
import Data from '../../service/UserDataService';

import { Context } from '../../context/AuthContext';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
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

const Register = () => {
  const { handleLogin } = useContext(Context);

  const add = {
    id: null,
    username: "",
    email: "",
    password: ""
  }
  const [register, setRegister] = useState(add)
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false)
  const [passwordValid, setPasswordValid] = useState(add.password)
  const [passwordVerific, setPasswordVerific] = useState(false)
  const [inputValid, setInputValid] = useState(add.username)
  const [inputVerific, setInputVerific] = useState(false)
  const [emailValid, setEmailValid] = useState(add.email)
  const [emailVerific, setEmailVerific] = useState(false)
  const [emailExist, setEmailExist] = useState("")
  const [inputExist, setInputExist] = useState("")

  const CreatUser = (data) => {
    const policy = document.querySelector(".custom-control-input")
    console.log(passwordVerific, "inputVerific " + inputVerific, "emailV " + emailVerific)
    if (policy.checked && passwordVerific && inputVerific && emailVerific) {
      console.log(passwordVerific, "inputVerific " + inputVerific, "emailV " + emailVerific)
      var user = {
        username: inputValid.username,
        email: emailValid.email,
        password: passwordValid.password
      }
      Data.createUser(user)
        .then(response => {
          setRegister({
            id: response.user.id,
            username: response.user.username,
            email: response.user.email,
            password: response.user.password
          })
            
        })
        .catch(e => {
          console.log(e)
        })
      setSubmit(true);  
    } else {
      alert("Something wrong with the data entered.")

    }
  }

  const HandleUser = (e) => {
    const { name, value } = e.target
    setInputValid({ ...inputValid, [name]: value })
    let user= e.target.value
    Data.getUserByUsersName(user)
      .then(response => {
        
        response.data.map(em =>{
          console.log(em.username)
          if(em.username === user){
            setInputVerific(false)
            setInputExist("Existing username")
          }else{
            setInputVerific(true)
            setInputExist("")
          }
        })
      })
      .catch(e => {
        console.log(e)
      })
    .catch(e => {
      console.log(e)
    })
  }
  const HandleEmail = (e) => {
    const { name, value } = e.target
    setEmailValid({ ...emailValid, [name]: value })
    let email = e.target.value
    Data.getUsersByEmail(email)
      .then(response => {
        response.data.map(em =>{
          console.log(em.email)
          if(em.email === email){
            setEmailVerific(false)
            setEmailExist("Existing e-mail")
          }else{
            setEmailVerific(true)
            setEmailExist("")
          }
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  const HandlePassword = (e) => {
    const { name, value } = e.target
    setPasswordValid({ ...passwordValid, [name]: value })
    const strength = document.querySelector(".strength")
    let pass = e.target.value
    if (pass.length <= 7) {
      setPasswordVerific(false)
      setPassword("Weak")
      strength.classList.add("text-danger")
      strength.classList.remove("text-success")
    } else {
      setPasswordVerific(true)
      setPassword("Strong")
      strength.classList.add("text-success")
      strength.classList.remove("text-danger")
    }
  }

  const redirectToUserProfile = () => {
    const isNewUser = 'newUser'
    handleLogin(isNewUser);
  }
  return (
    <>
      {submit ? (
        <>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0" >
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <h1 className="text-success"><div className="ni ni-check-bold text-success"></div> Registered successfully</h1>
                </div>
                <div className="text-center text-muted mb-4">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={redirectToUserProfile}
                  >
                    Login
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </>
      ) : (
        <>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <h1>Sign up</h1>
                </div>
                <Form role="form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                       placeholder="Email"
                        type="text"
                        name="username"
                        onChange={HandleUser}
                      />
                    </InputGroup>
                    <div className="text-muted font-italic">
                      <small>
                        {" "}
                        <span className=" font-weight-700">{inputExist}</span>
                      </small>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
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
                        onChange={HandleEmail}
                      />
                    </InputGroup>
                    <div className="text-muted font-italic">
                      <small>
                        {" "}
                        <span className="font-weight-700">{emailExist}</span>
                      </small>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        name="password"
                        onChange={HandlePassword}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-muted font-italic">
                    <small>
                      password strength:{" "}
                      <span className="strength font-weight-700">{password}</span>
                    </small>
                  </div>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"

                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span className="text-muted">
                            I agree with the{" "}
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button" onClick={CreatUser}>
                      Create account
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </>
      )}

    </>
  );
};

export default Register;