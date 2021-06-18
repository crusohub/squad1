// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
} from "reactstrap";

// core components
import Header from "components/Headers/TableHeader.js";
import React, { useEffect, useState } from "react";
import UserApi from "../../service/UserDataService";

const UserTables = () => {
  const TestList = [
    {
      name: "John",
      email: "jimns@gmail.com",
      country: "USA",
      adress: "San Francisco,CA",
      age: 27,
    },
    {
      name: "Misty",
      email: "kalene@outlook.com",
      country: "United Kingdom",
      adress: "London",
      age: 22,
    },
    {
      name: "Christopher",
      email: "baumt@yahoo.com.br",
      country: "Canada",
      adress: "Toronto",
      age: 36,
    },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    chargeUsers();
  }, []);

  const chargeUsers = () => {
    UserApi.getUsers().then((response) => {
      setUsers(response.data);
    });
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">User List</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((users, index) => (
                    <tr>
                      <th scope="row">{users.username}</th>
                      <td>{users.email}</td>
                      <td>{users.city}</td>
                      <td>{users.country}</td>
                      <td>{users.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserTables;
