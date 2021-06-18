import {useState} from "react";

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
import NewProjectHeader from "components/Headers/NewProjectHeader.js";
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
      <NewProjectHeader />
      {/* Page content */}
      {submitted ? (
        <div className="mx-auto text-center">
          <h4>Projeto criado com sucesso!</h4>
          <button className="btn btn-success" onClick={newProject}>
            Criar
          </button>
        </div>
      ) : (
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
                    <div className="pl-lg-4 container">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="projectname"
                            >
                              Nome do Projeto
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="projectname"
                              value={currentProject.projectname}
                              name="projectname"
                              type="text"
                              placeholder="Nome do Projeto"
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
                            <label className="form-control-label" htmlFor="budget">Despesas</label>
                            <Input
                              className="form-control-alternative"
                              name="budget"
                              value={currentProject.budget}
                              id="budget"
                              type="text"
                              placeholder="Despesas"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="completed">Percentual</label>
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
                          <Col className="text-right" xs="12">
                            <Button
                              color="primary"

                              onClick={updateDataProject}
                              size="sm"
                            >
                              Pesquisar
                            </Button>
                          </Col>
                        </Col>
                      </Row>

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
