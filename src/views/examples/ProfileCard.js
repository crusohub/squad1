import React, { useEffect, useState, useContext } from "react";
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

const ProfileCard = () => {
  const { currentUser } = useContext(Context)
  
  return (
    <>
      <CustomHeader
        title="Profile, Welcome."
        descripion="Here you can see all your information."
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
                    src={currentUser ? currentUser.photo : 'https://i.pravatar.cc/800'}
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
                {currentUser.firstname}
                <span className="font-weight-light">{currentUser.username}, 26</span>
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {currentUser.city}
              </div>
              <div className="h3 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {currentUser.email}
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                <b>{`${currentUser.city}, ${currentUser.country}`}</b>
              </div>
              <hr className="my-4" />
              <p className=" font-weight-500">{currentUser.about}</p>
            </div>
            <Row className="justify-content-center mt-3">
              <Link to="/admin/user-profile">
                <Button 
                  color="primary" 
                  size="md"
                >
                  Edit Profile
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
export default ProfileCard;
