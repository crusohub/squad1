import React, {useState} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
  UncontrolledTooltip,
  CardBody,
  Button, Col
} from "reactstrap";
// core components
import CustomHeader from "components/Headers/CustomHeader";

const Tables = () => {
  const projectInitial = [
    {
     "id": "1",
     "image": "image 1",
     "projectname": "projectname 1",
     "status": "status 1",
     "budget": "budget 1",
     "completed": "completed 1"
    },
    {
     "id": "2",
     "image": "image 2",
     "projectname": "projectname 2",
     "status": "status 2",
     "budget": "budget 2",
     "completed": "completed 2"
    },
    {
     "id": "3",
     "image": "image 3",
     "projectname": "projectname 3",
     "status": "status 3",
     "budget": "budget 3",
     "completed": "completed 3"
    }]
    const [projects, setProjects] = useState(projectInitial)
  return (
    <>
      <CustomHeader 
      urlImage = "https://proxy.organicadigital.com/img-36724f4a253b9870.png?thumb=701x"
      title = "Search Project"
      descripion = "Search Project"
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Col className="order-xl-1" xl="12">
                  <Row>
                  <div className="col">
            <Card className="shadow">
                              <Form>
                              <CardHeader className="border-0">
                <h3 className="mb-0">Pesquisar</h3>
                    <FormGroup>
                    <Col>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Username
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="lucky.jesse"
                        id="input-username"
                        placeholder="Username"
                        type="text"
                      />
                      
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >Pesquisar</Button>
                      </Col>
                    </FormGroup>
                    </CardHeader>
                  </Form>
                  </Card>
                  </div>
                  </Row>
                  </Col>
                  <Col className="order-xl-1" xl="12">
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {projects.map((value, index) => (
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/bootstrap.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {value.projectname}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        completed
                      </Badge>
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Remove
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>  
                ))}
                  
                </tbody>
              </Table>
              </CardBody>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        </Col>
      </Container>
    </>
  );
};

export default Tables;
