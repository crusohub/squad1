import React, { useContext, useState } from "react";
import { ProjectContext } from "../../context/contextProject";
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
import CustomHeader from "components/Headers/CustomHeader";

const Profile = () => {
  const [project, setProject] = useContext(ProjectContext);
  return (
    <>
      <CustomHeader
        urlImage="https://media.eadbox.com/system/uploads/course/logo/5c49f59accd2280026467052/Adriana_Derobio_Gestao_Projetos_Card_Plataforma.png"
        title="Edit Project"
        descripion="Edit Project"
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Editar Projeto</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nome do projeto
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            placeholder=""
                            type="select"
                          >
                            <option value="projeto">
                              {project.projectname}
                            </option>
                            <option value="projeto1">
                              {project.projectname1}
                            </option>
                            <option value="projeto2">
                              {project.projectname2}
                            </option>
                            <option value="projeto3">
                              {project.projectname3}
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            E-mail
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
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
                            htmlFor="input-last-name"
                          >
                            Status
                          </label>
                          <Input
                            className="form-control-alternative"
                            type="select"
                          >
                            <option selected value="status">
                              Status
                            </option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="delayed">Delayed</option>
                            <option value="schedule">Schedule</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Despesas
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Percentual
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Lista de projetos
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={project.projectname}
                        id="input-username"
                        placeholder="Nome do Projeto"
                        type="select"
                      />
                      <Col className="text-right" xs="12">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Save
                        </Button>
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

export default Profile;
