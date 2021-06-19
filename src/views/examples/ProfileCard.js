import React, { useEffect, useState } from "react";
import api from '../../service/UserDataService';
/* import { browserHistory } from 'react-router';
 *//* import { useHistory } from "react-router-dom";
history.push()
 */
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { Link } from 'react-router-dom'
import { useReducer } from "react/cjs/react.development";

const ProfileCard = () => {
  const userC = {
    id: 2,
    username: "User1",
    firstname: "User",
    lastname: "User",
    email: "User1@u1.com",
    address: "User There",
    city: "There",
    country: "Here",
    postalcode: "55",
    about: "Something about me",
    date: "2020-07-22T00:27:48.012Z",
    password: "1"
  }

  const [user, setUser] = useState([])
/* 
     useEffect(() => {
      api.getUserById().then((response) =>{
        setUser(response.data)
      })
     }, []);
   */  
  function rendelEdit(e){
    e.preventDefault()
    const newUser = {
      username: e.target.inputUsuarioNome.value,
      idade: e.target.inputidade.value,
      firstname: e.target.inputNome.value,
      lastname: e.target.inputSobrenome.value,
      email: e.target.inputEmail.value,
      address: e.target.inputEndereco.value,
      city: e.target.inputCity.value,
      country: e.target.inputCountry.value,
      postalcode: e.target.inputPostal.value,
      about: e.target.inputAbout.value,
      photo: e.target.inputPhoto.value
    }

    api.updateUserData(userC.id, newUser)
    .then(response=>{
      console.log(response.status)
/*       browserHistory.push("/dashboard")
 */   /*    console.log(1) */

    })
    .catch(e=>{
      console.log(e)
/*       console.log(3)
 */    })
  }
  
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={rendelEdit}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputUsuarioNome"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={userC.username}
                            id="inputUsuarioNome"
                            placeholder="name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputEmail"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputEmail"
                            defaultValue={user.email}
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputNome"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputNome"
                            defaultValue={userC.firstname}
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputSobrenome"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputSobrenome"
                            defaultValue={userC.lastname}
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputPhoto"
                          >
                            Photo
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputPhoto"
                            defaultValue={userC.photo}
                            placeholder="Insert your photo"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputEmail"
                          >
                            age
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputidade"
                            defaultValue={user.idade}
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputEndereco"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputEndereco"
                            defaultValue={userC.address}
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputCity"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputCity"
                            defaultValue={userC.city}
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputCountry"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputCountry"
                            defaultValue={userC.country}
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="inputPostal"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="inputPostal"
                            defaultValue={userC.postalcode}
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        id="inputAbout"
                        defaultValue={userC.About}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                  <Button
                    color="info"
/*                     href="#pablo"
 */                    type="submit"
                  >
                    Edit profile
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileCard;
