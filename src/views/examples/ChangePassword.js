/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import Data from '../../service/UserDataService'

// reactstrap components
import {
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";


const ChangePassword = () => {

   
      

  const [submit , setSubmit] = useState(false);
  const [password, setPassword] = useState("")
  const [passwordValid, setPasswordValid] = useState(password)
  const [passwordVerific, setPasswordVerific] = useState(false)
  const [compare, setCompare] = useState("")
  const [compareVerific, setCompareVerific] = useState(false)
  const [valuePassword , setValuePassword] = useState("")
  const [user , setUser] = useState("")
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [newUser, setNewUser] = useState({});

  const HandlePassword = (e) => {
    const { name, value } = e.target
    setPasswordValid({ ...passwordValid, [name]: value })
    const strength = document.querySelector(".strength")
    let pass = e.target.value
    setValuePassword(pass)
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
    if(pass.length == 0)
    setPassword("")
  }

  const HandleConfirm = (e) =>{
    const { name, value } = e.target
    setPasswordValid({ ...passwordValid, [name]: value })
    const confirm = document.querySelector(".confirm")
    let pass = e.target.value
    if (pass == valuePassword) {
        setCompareVerific(true)
        setCompare("Compatible Password")
        confirm.classList.add("text-success")
        confirm.classList.remove("text-danger")
    } else {
        setCompareVerific(false)
        setCompare("Unsupported passwords")
        confirm.classList.add("text-danger")
        confirm.classList.remove("text-success")
    }
    if(pass.length == 0)
    setCompare("")
  }

  const HandleUser = (e) =>{
    const { name, value } = e.target
    setPasswordValid({ ...passwordValid, [name]: value })
    let userName = e.target.value
    setUser(userName);

    function filterUser(value) {
      if(value.username === userName) {
        return value.id
      }
      return
    }

    const user = users.filter(value => filterUser(value));
    if(user[0]) {
      setUserId(user[0].id);
      const newUser = {...user[0], password: valuePassword }
      setNewUser(newUser);
    }

  }

  function SubmitPassword(event){
    event.preventDefault()
    if (compareVerific && passwordVerific == true){
      const data = {...newUser, password: valuePassword}
      Data.updateUserData(userId, data)
    }else{
      alert("Complete all the fields correctly")
    }
    event.target.reset();
  }

  

  useEffect(() => {
    Data.getUsers().then(result => {
      setUsers(result.data)
    })
  }, [])

  return (
    <>
    {submit ? (
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <large>Password Changed !!</large>
          </div>
         
        </CardBody>
      </Card>
    </Col>
    ):(
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Change Password</small>
          </div>
          <Form role="form" onSubmit={SubmitPassword}>
          <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    className="user"
                    value={user}
                    name="login"
                    placeholder="User Login"
                    type="text"
                    autoComplete="new-login"
                    onChange={HandleUser}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    name="password"
                    placeholder="New Password "
                    type="password"
                    autoComplete="new-password"
                    onChange={HandlePassword}
                  />
                </InputGroup>

                <div className="text-muted font-italic">
                    <small>
                      password strength:{" "}
                      <span className="strength font-weight-700">{password}</span>
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
                    required
                    name="confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={HandleConfirm}
                  />
                </InputGroup>
                <div className="text-muted font-italic">
                    <small>
                      {" "}
                      <span className="confirm font-weight-700">{compare}</span>
                    </small>
                </div>
              </FormGroup>
              <div className="text-center">
              <Input 
                className="my-4" 
                color="primary" 
                type="submit"
              >
                Change
              </Input>
            </div>
            </Form>
        </CardBody>
      </Card>
    </Col>
    )}
      
    </>
  );
};

export default ChangePassword;
