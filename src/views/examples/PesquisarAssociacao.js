import React, {useState, useEffect} from "react";

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
import Header from "components/Headers/HeaderTables";
import UserDataService from "../../service/UserDataService"
const Tables = () => {
  const associacaoInitial = [
    {
     "id": "1",
     "projectid": "1",
     "userid": "1",
     "projectname": "project 1",
     "username": "user 1"
    },
    {
     "id": "2",
     "projectid": "1",
     "userid": "2",
     "projectname": "project 1",
     "username": "user 2"
    },
    {
     "id": "3",
     "projectid": "1",
     "userid": "3",
     "projectname": "project 1",
     "username": "user 3"
    }
   ]
   const usersInitial = [
    {
     "id": "1",
     "username": "username 1",
     "firstname": "firstname 123",
     "lastname": "lastname 123",
     "email": "usuario@gmail.com",
     "address": "address 1",
     "city": "city 1",
     "country": "country 1",
     "postalcode": "postalcode 1",
     "about": "about 1",
     "": "username 1as",
     "password": "1"
    },
    {
     "id": "2",
     "username": "username 2",
     "firstname": "firstname 2",
     "lastname": "lastname 2",
     "email": "email 2",
     "address": "address 2",
     "city": "city 2",
     "country": "country 2",
     "postalcode": "postalcode 2",
     "about": "about 2"
    },
    {
     "id": "3",
     "username": "username 3",
     "firstname": "firstname 3",
     "lastname": "lastname 3",
     "email": "email 3",
     "address": "address 3",
     "city": "city 3",
     "country": "country 3",
     "postalcode": "postalcode 3",
     "about": "about 3"
    }]

   const [users, setUsers] = useState([])
   const [projects, setProjects] = useState(usersInitial)
   const [associacoes, setAssociacoes] = useState(associacaoInitial)

   useEffect(()=>{
      UserDataService.getUsers().then(
        response => {
          setUsers(response.data)
        }
      )
   }, [])
  return (
    <>
      <Header />
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
                <Row>
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
                        type="select"
                      >
                        {users.map((value, index) => (
                          <option>{value.username}</option>
                        ))}
                          
                      </Input>
                      </Col>
                      </Row>
                      <Row>
                    <Col>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Project
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="lucky.jesse"
                        id="input-username"
                        placeholder="Username"
                        type="select"
                        >
                          {associacoes.map((value, index) => (
                          <option>{value.username}</option>
                        ))}

                        </Input>
                        </Col>
                      </Row>
                      
                      <Row>
                      <Col>
                            <Button 
                                className="my-4" 
                                color="primary" 
                                type="submit"
                                onClick={(e) => e.preventDefault()}
                                >
                                Pesquisar
                            </Button>
                            </Col>
                      </Row>
                      
                      
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
                {associacoes.map((value, index) => (
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
                        pending
                      </Badge>
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
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
