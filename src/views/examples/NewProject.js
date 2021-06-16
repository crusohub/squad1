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
import React from "react";

// reactstrap components
import {
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
import NewProjectHeader from "components/Headers/NewProjectHeader.js";


const NewProject = () => {

  return (
    <>
      <NewProjectHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>       
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Novo Projeto</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <div className="input-group-alternative input-group border border-light rounded">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-search"></i>
                        </span>
                      </div>
                      <Input
                        className="form-control "
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </Col>               
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informações do Projeto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nome do Projeto
                          </label>
                          <Input
                            className="form-control-alternative"                 
                            id="input-username"
                            placeholder="Nome do Projeto"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="imagem">Imagem</label>
                          <Input className="form-control-alternative" type="text" name="imagem" id="imagem" placeholder="url imagem"/>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="status">Status</label>
                          <Input className="form-control-alternative" type="select" name="status" id="status">
                            <option>pending</option>
                            <option>completed</option>
                            <option>delayed</option>
                            <option>on schedule</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="despesas">Despesas</label>
                          <Input className="form-control-alternative" type="text" name="select" id="despesas" placeholder="Despesas" />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="percentual">Percentual</label>
                          <Input className="form-control-alternative" type="number" min="1" max="100" name="percentual" id="percentual" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewProject;
