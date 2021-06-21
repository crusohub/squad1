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
import React, { useState } from "react";
import emailjs from "emailjs-com";

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


const ForgotPassword = () => {

  const [submit , setSubmit] = useState(false);
  
  function sendEmail(e) {
    e.preventDefault();
    setSubmit(true)
    emailjs.sendForm('service_y6s0eui', 'template_ap8q9xx', e.target, 'user_FccarwvvWOaoLtB6Pxl9E')
    .then((result) => {
        var message = window.confirm("Check your inbox.");
        if (message == true) {
          setSubmit(false);
        } else {
          setSubmit(false);
        }
      }, (error) => {
        window.alert("Error, try later.");
      });
      e.target.reset();
  }

  return (
    <>
    {submit ? (
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <large>Wait a Moment !!</large>
          </div>
         
        </CardBody>
      </Card>
    </Col>
    ):(
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Forgot Password ?</small>
          </div>
          <Form role="form" onSubmit={sendEmail}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="input_email"
                  placeholder="Email"
                  type="email"
                  autoComplete="new-email"
                />
                {/* <Input
                  name="input_userId"
                  type="hidden"
                  value={}
                /> */}
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Input className="my-4" color="primary" type="submit">
                Send
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

export default ForgotPassword;
