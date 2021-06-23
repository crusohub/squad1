import React, { useEffect, useState } from "react";
import api from "../../service/UserDataService";
import { Context } from "../../context/AuthContext";

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
import CustomHeader from "components/Headers/CustomHeader.js";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(0);

  function rendelEdit(e) {
    e.preventDefault();
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
      date: user.date,
      about: e.target.inputAbout.value,
      photo: e.target.inputPhoto.value,
    };

    api
      .updateUserData(user.id, newUser)
      .then((response) => {
        console.log(response.status); /*    console.log(1) */
        /*       browserHistory.push("/dashboard")
         */
      })
      .catch((e) => {
        console.log(e);
        /*       console.log(3)
         */
      });
  }

  return (
    <>
      <CustomHeader
        title="Edit your info"
        descripion="Here you can edit all of your info displayed"
        urlImage="https://grandnode.pl/content/images/thumbs/5d9353e778d6ca29e83524a6_theme-editor.png"
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5 justify-content-center">
          <Col className="order-xl-1" xl="12">
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
                            defaultValue={user.username}
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
                            defaultValue={user.firstname}
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
                            defaultValue={user.lastname}
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
                            defaultValue={user.photo}
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
                            defaultValue={user.address}
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
                            defaultValue={user.city}
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
                            defaultValue={user.country}
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
                            defaultValue={user.postalcode}
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
                        defaultValue={user.About}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>

                  <Row className="justify-content-center mt-3">
                    <Button color="primary" size="md" type="submit"
                    /* color="info" */
                    /*href="#pablo"*/
                    >
                      Confirm
                    </Button>
                    <Link to="/admin/profile-Card">
                      <Button color="primary" size="md">
                        Profile
                      </Button>
                    </Link>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
