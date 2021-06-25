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
    },
    {
     "id": "4",
     "image": "image 3",
     "projectname": "projectname 4",
     "status": "status 4",
     "budget": "budget 4",
     "completed": "completed 4"
    },
    {
     "id": "5",
     "image": "image 5",
     "projectname": "projectname 5",
     "status": "status 5",
     "budget": "budget 5",
     "completed": "completed 5"

    },
    {
     "id": "6",
     "image": "image 6",
     "projectname": "projectname 6",
     "status": "status 6",
     "budget": "budget 6",
     "completed": "completed 6"
    },
    {
     "id": "7",
     "image": "image 7",
     "projectname": "projectname 7",
     "status": "status 7",
     "budget": "budget 7",
     "completed": "completed 7"

    },
    {
     "id": "8",
     "image": "image 8",
     "projectname": "projectname 8",
     "status": "status 8",
     "budget": "budget 8",
     "completed": "completed 8"
    },
    {
     "id": "9",
     "image": "image 9",
     "projectname": "projectname 9",
     "status": "status 9",
     "budget": "budget 9",
     "completed": "completed 9"

    },
    {
     "id": "10",
     "image": "image 10",
     "projectname": "projectname 10",
     "status": "status 10",
     "budget": "budget 10",
     "completed": "completed 10"
    }]
    const [projects, setProjects] = useState(projectInitial)
    const RemoveLinha= ()=>{}
  return (
    <>
      <CustomHeader 
      urlImage = "https://pesquisaescolar.site/wp-content/uploads/2018/03/img_5aa0432f0681a.png"
      title = "Pesquisar Project"
      descripion = "Pesquisar Project"
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
                        Firstname
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="lucky.jesse"
                        id="input-username"
                        placeholder="Username"
                        type="text"
                      />
                      
                      <Button
                        className="mr-4 mt-3"
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
                    <td>$4,000 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        completed
                      </Badge>
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-4">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
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
                            onClick={(e) => RemoveLinha()}
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
