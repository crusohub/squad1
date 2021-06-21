/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect, useCallback } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import UserDataService from '../../service/UserDataService';
import ProjectDataService from '../../service/ProjectDataService';
import ConexaoDataService from '../../service/ConexaoDataService';
import AssociationDataService from '../../service/AssociationDataService';

const Header = () => {

  const LAST_WEEK = 7;
  const LAST_MONTH = 30;
  const LAST_DAY = 1;
  const LAST_YEAR = 365;
  const [totalUsers, setTotalUsers] = useState(0);
  const [countUsers, setCountUsers] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [totalConnections, setTotalConnections] = useState(0);
  const [countConnections, setCountConnections] = useState(0);
  const [qtdUsersInProjects, setQtdUsersInProjects] = useState(0);

  const checkUserInTime = useCallback((userRegister, time) => {
    const miliByDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const timeAgo = new Date(today.getTime() - time * miliByDay);
    const dateUser = new Date(userRegister.split("-").join("/"));
    if (dateUser > timeAgo) {
      return true;
    } else 
      return false;
  }, []);

  const getUsers = useCallback(
    async () => {
      try {
        const { data } = await UserDataService?.getUsers();
        setTotalUsers(data?.length ?? 0);
        let count = 0;
        data?.map((user) => {
          const dateHour = user?.date?.split('T');
          const isInRange = checkUserInTime(dateHour[0], LAST_MONTH);
          if (isInRange) {
            count++;
            setCountUsers(count);
          } else return null;
          return null;
        });
      } catch (error) {
        console.error(error);
      }
  }, [checkUserInTime]);

  const getProjects = useCallback(
    async () => {
      try {
        const { data } = await ProjectDataService?.getAllProject();
        setTotalProjects(data?.length ?? 0);
        let count = 0;
        data?.map((project) => {
          const dateHour = project?.date?.split('T');
          const isInRange = checkUserInTime(dateHour[0], LAST_MONTH);
          if (isInRange) {
            setCountProjects(++count);
          } else return null;
          return null;
        });
      } catch (error) {
        console.error(error);
      }
    }, [checkUserInTime])

  const getConnections = useCallback(
    async () => {
      try {
        const { data } = await ConexaoDataService?.getConnections();
        setTotalConnections(data?.length ?? 0);
        let count = 0;
        data?.map((user) => {
          const dateHour = user?.date?.split('T');
          const isInRange = checkUserInTime(dateHour[0], LAST_MONTH);
          if (isInRange) {
            count++;
            setCountConnections(count);
          } else return null;
          return null;
        });
      } catch (error) {
        console.error(error);
      }
  }, [checkUserInTime]);

  const getAssociations = useCallback(
    async () => {
      try {
        const { data } = await AssociationDataService?.getAllAssociation();
        setQtdUsersInProjects(data?.length ?? 0);
      } catch (error) {
        console.log(error);
      }
    }, []);

  const percentBy = (percentTo, percentFill) => {
    return ((percentTo / 100) * percentFill).toFixed(2);
  }

  const averageBy = (dividendo, divisor=1) => {
    if (!divisor) { return 0; }
    else { return (dividendo / divisor).toFixed(2) }
  }

  useEffect(() => {
    getUsers();
    getProjects();
    getConnections();
    getAssociations();
  }, [getUsers, getProjects, getConnections, getAssociations]);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-3.5"
                        >
                          Total users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {totalUsers}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                          {// <i className="fas fa-chart-bar" /> 
                          }
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 
                        {` ${percentBy(countUsers, totalUsers)}%` }
                      </span>{" "}
                      <span className="text-nowrap">Last thirty days</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total connections
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{totalConnections}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fas fa-people-arrows"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 
                        { ` ${percentBy(countConnections, totalConnections)}%` }
                      </span>{" "}
                      <span className="text-nowrap">Last thirty days</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Users by projects
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{ averageBy(qtdUsersInProjects, totalProjects) }</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="fas fa-id-card-alt"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {
                      //<span className="text-warning mr-2">
                        //<i className="fas fa-arrow-down" /> 1.10%
                      //</span>{" "} 
                      }
                      <span className="text-nowrap">Average from the last minute</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Projects
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{totalProjects}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-project-diagram" /> 
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 
                        {` ${percentBy(countProjects, totalProjects)}%`}
                      </span>{" "}
                      <span className="text-nowrap">Last thirty days</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
