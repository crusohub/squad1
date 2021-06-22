import { useState } from "react";

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
import CustomHeader from "components/Headers/CustomHeader.js";
import ProjectDataService from '../../service/ProjectDataService'

const NewProject = (props) => {
  // valores iniciais
  const initialProjectState = {
    id: null,
    image: "",
    projectname: "",
    status: "",
    budget: "",
    completed: "",
  }

  const [currentProject, setCurrentProject] = useState(initialProjectState);
  const [submitted, setSubmitted] = useState(false);
  //pega todos os dados
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };
  const updateDataProject = () => {
    var dataProject = {

      image: currentProject.image,
      projectname: currentProject.projectname,
      status: currentProject.status,
      budget: currentProject.budget,
      completed: currentProject.completed
    }

    // valores para o update
    ProjectDataService.createProject(dataProject)
      .then(response => {
        setCurrentProject({
          id: response.data.id,
          image: response.data.image,
          projectname: response.data.projectname,
          status: response.data.status,
          budget: response.data.budget,
          completed: response.data.completed
        })
        setSubmitted(true);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });

  }
  const newProject = () => {
    setCurrentProject(initialProjectState);
    setSubmitted(false);
  };
  //pega os valores digitados

  return (
    <>
      <CustomHeader
        urlImage="https://picsum.photos/id/1015/367/267"
        title="New Project"
        descripion="Create New Project"
      />
      {/* Page content */}
      {submitted ? (
        <div className="mx-auto text-center">
          <Col className="order-xl-1" >
            <CardHeader className="bg-white border-0 card-header">
              <h4>Successfully created project!</h4>
              <Button className="primary" color="primary" onClick={newProject} size="lg">
                To create
              </Button>
            </CardHeader>
          </Col>
        </div>
      ) : (
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">New Project</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Project Information
                    </h6>
                    <div className="pl-lg-4 container">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="projectname"
                            >
                              Project name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="projectname"
                              value={currentProject.projectname}
                              name="projectname"
                              type="text"
                              placeholder="Project name"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="image">image</label>
                            <Input
                              className="form-control-alternative"
                              id="image"
                              value={currentProject.image}
                              name="image"
                              type="text"
                              placeholder="url image"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="status">Status</label>
                            <Input className="form-control-alternative" value={currentProject.status} onChange={handleInputChange} type="select" name="status" id="status">
                              <option >pending</option>
                              <option>completed</option>
                              <option>delayed</option>
                              <option>on schedule</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="budget"> Budget</label>
                            <Input
                              className="form-control-alternative"
                              name="budget"
                              value={currentProject.budget}
                              id="budget"
                              type="text"
                              placeholder="Budget"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="completed">completed</label>
                            <Input
                              className="form-control-alternative"
                              type="number"
                              value={currentProject.completed}
                              min="1"
                              max="100"
                              name="completed"
                              id="completed"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Col className="text-right " >
                        <Button
                          color="primary"
                          onClick={updateDataProject}
                          size="lg"
                        >
                          Save
                        </Button>
                      </Col>

                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}

    </>
  );
};

export default NewProject;