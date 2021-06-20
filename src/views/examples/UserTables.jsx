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
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    chargeUsers();
  }, []);

  useEffect(()=>{
    chargeUsersPerPage()
  }, [currentPage]);

  const chargeUsers = () => {
    UserApi.getUsers().then((response) => {
      const pageLength = response.data.length / 10;
      (response.data.length % 10 === 0)
        ? setPages(pageLength)
        : setPages(pageLength + 1)
        
      const list = [];
      for (let i = 0; i <= pages; i++) {
        list.push(i);
        console.log(list);
      }
      setPageList(list);
      chargeUsersPerPage(1)
    });
  };

  const chargeUsersPerPage = (value) => {
    UserApi.getUserByPage(value, 10).then((response) => {
      setUsers(response.data);
    });
  };

  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage(currentPage + 1);
    chargeUsersPerPage(currentPage);
    document.querySelector("#prevPage").classList.remove("disabled");
  };

  const handlePrevPage = () => {
    console.log(currentPage);
    setCurrentPage(currentPage - 1);
    chargeUsersPerPage(currentPage);

    if (currentPage <= 1) {
      console.log(currentPage);
      document.querySelector("#prevPage").classList.add("disabled");
    }

    console.log(currentPage);
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
                    <tr key={index}>
                      <th  scope="row">{users.username}</th>
                      <td >{users.email}</td>
                      <td >{users.city}</td>
                      <td >{users.country}</td>
                      <td >{users.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem id="prevPage" className="disabled">
                      <PaginationLink
                        id="LinkPrevPage"
                        onClick={() => handlePrevPage()}
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>

                    {pageList.map((value) => (
                      <PaginationItem className="active">
                        <PaginationLink
                          id="numberPage"
                          onClick={() => chargeUsersPerPage(value + 1)}
                        >
                          {value + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationLink
                        id="nextPage"
                        onClick={() => handleNextPage()}
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
      </Container>
    </>
  );
};

export default UserTables;
