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
                    <h3 className="mb-0">Edit Project</h3>
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
                            Project Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={project.projectname1}
                            id="input-username"
                            placeholder=""
                            type="text"
                          >               
                          </Input>
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
                      <Col lg="6" xs="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Expenses
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="expenses"
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
                            Percentage
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="percentage
                            "
                            type="number"
                          />
                        </FormGroup>
                      </Col>
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
