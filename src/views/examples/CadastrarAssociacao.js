import React, {useState} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
  Button, Col
} from "reactstrap";
// core components
import CustomHeader from "components/Headers/CustomHeader";

const Tables = () => {
  
  const projectInitial = [
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

  const [users, setUsers] = useState(usersInitial)
  const [projects, setProjects] = useState(projectInitial)
  

  return (
    <>
      <CustomHeader
      urlImage = "http://www.eosconsultores.com.br/wp-content/uploads/2017/09/gerente-1024x512.jpg"
      title = "Register Association"
      descripion = "Register Association" 
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
                        type="text"
                      />
                      </Col>
                      </Row>
                      <Row>
                    <Col>
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >Enviar</Button>
                      </Col></Row>
                    </FormGroup>
                    </CardHeader>
                  </Form>
                  </Card>
                  </div>
                  </Row>
                  </Col>
        
      </Container>
    </>
  );
};

export default Tables;
