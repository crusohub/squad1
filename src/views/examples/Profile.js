import React, { useEffect, useState } from "react";
import api from "../../service/UserDataService";
import imagem from "../../assets/img/theme/team-1-800x800.jpg";
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
import { useReducer } from "react/cjs/react.development";

const Profile = () => {
  /*  const user = {
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
    password: "1",
  }; */
  const [user, setUser] = useState(0);

  /*   const [user, setUser] = useState([]);
   */ /* 
     useEffect(() => {
      api.getUserById().then((response) =>{
        setUser(response.data)
      })
     }, []);
   */
  function rendelEdit(e) {
    e.preventDefault();
    const newUser = {
      username: e.target.inputUsuarioNome.value,
      firstname: e.target.inputNome.value,
      lastname: e.target.inputSobrenome.value,
      email: e.target.inputEmail.value,
      address: e.target.inputEndereco.value,
      city: e.target.inputCity.value,
      country: e.target.inputCountry.value,
      postalcode: e.target.inputPostal.value,
      about: e.target.inputAbout.value,
      date: user.date,
      photo: e.target.inputPhoto.value,
    };

    api
      .updateUserData(user.id, newUser)
      .then((response) => {
        console.log(response.status);
        /*    console.log(1) */
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
      <Col className="order-xl-2 mb-5 mb-xl-0 center" xl="8">
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src="https://i.pravatar.cc/800"
                  />
                </a>
              </div>
            </Col>
          </Row>

          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-md-7">
                  <div>
                    <span className="heading">22</span>
                    <span className="description">Friends</span>
                  </div>
                  <div>
                    <span className="heading">10</span>
                    <span className="description">Photos</span>
                  </div>
                  <div>
                    <span className="heading">89</span>
                    <span className="description">Comments</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>
                {user.firstname}
                <span className="font-weight-light">{user.username}, 27</span>
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {user.city}
              </div>
              <div className="h3 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {user.email}
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                <b>{`${user.city}, ${user.country}`}</b>
              </div>
              <hr className="my-4" />
              <p className=" font-weight-500">{user.about}</p>
            </div>
            <Row className="justify-content-center mt-3">
              <Link to="/admin/profile-Card">
                <Button color="primary" size="md">
                  Edit Profile
                </Button>
              </Link>
              
              <Link to="/admin/SettingsProfile">
                <Button color="primary" size="md">
                Settings Profile
                </Button>
              </Link>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col className="text-right" xs="4"></Col>
    </>
  );
};
export default Profile;
