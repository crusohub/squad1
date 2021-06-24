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
import CustomHeader from "components/Headers/CustomHeader.js";
import React, { useEffect, useState } from "react";
import UserApi from "../../service/UserDataService";

const UserTables = () => {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // chargeUsers();
    chargePagination();
  }, []);

  useEffect(() => {
    chargeUsersPerPage();
  }, [currentPage]);

  const chargePagination = async () => {
    try {
      const getUsers = await UserApi.getUsers();
      setPages(Math.ceil(getUsers.data.length / 10));
      const list = [];
      for (let i = 0; i < pages; i++) {
        list.push(i);
      }
      setPageList(list);
      setCurrentPage(1);
      // console.log("async");
    } catch {
      console.error({ message: "Deu ruim" });
    }
  };

  /*   const chargeUsers = () => {
    UserApi.getUsers().then((response) => {
      // const pageLength = response.data.length / 10;
      // (response.data.length % 10 === 0)
      //   ? setPages(pageLength)
      //   : setPages(pageLength + 1)
      setPages(Math.ceil(response.data.length / 10));
      const list = [];
      for (let i = 0; i < pages; i++) {
        list.push(i);
      }
      setPageList(list);
      setCurrentPage(1);
    });
  }; */

  const chargeUsersPerPage = () => {
    UserApi.getUserByPage(currentPage, 10).then((response) => {
      setUsers(response.data);
      // console.log("per page");
    });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <CustomHeader
        title="List of Users Registered"
        descripion="Here you can edit all of your info displayed"
        urlImage="https://digitalpixel.com.br/wp-content/uploads/2016/08/users-870x342.jpg"
      />
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
                      <th scope="row">{users.username}</th>
                      <td>{users.email}</td>
                      <td>{users.city}</td>
                      <td>{users.country}</td>
                      <td>{users.address}</td>
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
                    <PaginationItem
                      id="prevPage"
                      className={currentPage <= 1 ? "disabled" : "active"}
                    >
                      <PaginationLink
                        id="LinkPrevPage"
                        onClick={() => handlePrevPage()}
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>

                    {pageList.map((value) => (
                      <PaginationItem
                        className={currentPage == value + 1 ? "active" : ""}
                        // style="color:blue"
                      >
                        <PaginationLink
                          id="numberPage"
                          onClick={() => setCurrentPage(value + 1)}
                        >
                          {value + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem
                      id="nextPage"
                      className={
                        currentPage == pageList.length ? "disabled" : "active"
                      }
                    >
                      <PaginationLink
                        id="LinkNextPage"
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
