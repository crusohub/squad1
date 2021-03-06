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
import { useSaveView } from '../../context/hooks/SaveViewData';

const Header = () => {

  const SavedView = useSaveView();

  const LAST_WEEK = 7;
  const LAST_MONTH = 30;
  const LAST_DAY = 1;
  const LAST_YEAR = 365;
  const [totalUsers, setTotalUsers] = useState(0);
  const [countUsersInRange, setCountUsersInRange] = useState([0, 0, 0, 0]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [countProjectsInRange, setCountProjectsInRange] = useState([0, 0, 0, 0]);
  const [totalConnections, setTotalConnections] = useState(0);
  const [countConnectionsInRange, setCountConnectionsInRange] = useState([0, 0, 0, 0]);
  const [qtdUsersInProjects, setQtdUsersInProjects] = useState(0);
  const [textRange, setTextRange] = useState(["Since last day", "Since last week", "Since last month", "Since last year"]);

  const checkUserInTime = useCallback((userRegisterDate, time) => {
    const miliByDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const timeAgo = new Date(today.getTime() - time * miliByDay);
    const date = new Date(userRegisterDate.split("-").join("/"));
    if (date > timeAgo) {
      return true;
    } else 
      return false;
  }, []);

  const percentBy = (percentTo, percentFill) => {
    return ((percentTo / 100) * percentFill).toFixed(2);
  }

  const averageBy = (dividendo, divisor=1) => {
    if (!divisor) { return 0; }
    else { return (dividendo / divisor).toFixed(2) }
  }

  const handleClick = () => {
    if (SavedView?.index + 1 >= 4) {
      SavedView?.setIndex(0);
      return;
    }
    SavedView?.setIndex(SavedView?.index + 1);
  }

  const setDataInRange = useCallback((data) => {
        let countDataCreateOnDay = 0;
        let countDataCreateInWeek = 0;
        let countDataCreateInMonth = 0;
        let countDataCreateInYear = 0;
        data?.map((element) => {
          const dateHour = element?.date?.split('T');
          const isOnDay = checkUserInTime(dateHour[0], LAST_DAY);
          const isInWeek = checkUserInTime(dateHour[0], LAST_WEEK);
          const isInMonth = checkUserInTime(dateHour[0], LAST_MONTH);
          const isInYear = checkUserInTime(dateHour[0], LAST_YEAR);
          countDataCreateOnDay = (isOnDay) ? ++countDataCreateOnDay : countDataCreateOnDay;
          countDataCreateInWeek = (isInWeek) ? ++countDataCreateInWeek : countDataCreateInWeek;
          countDataCreateInMonth = (isInMonth) ? ++countDataCreateInMonth : countDataCreateInMonth;
          countDataCreateInYear = (isInYear) ? ++countDataCreateInYear : countDataCreateInYear;
          return null;
        });
        return ([countDataCreateOnDay, countDataCreateInWeek, countDataCreateInMonth, countDataCreateInYear]);
  }, [checkUserInTime]);

  const getUsers = () => {
    try {
      setTotalUsers(SavedView?.users?.length ?? 0);
      setCountUsersInRange(setDataInRange(SavedView?.users));
      //console.log(SavedView?.users);
    } catch (error) {
      setTotalUsers(SavedView?.users?.length ?? 0);
      setCountUsersInRange(setDataInRange(SavedView?.users));
    }
  }

  const getProjects = () => {
    try {
      setTotalProjects(SavedView?.projects?.length ?? 0);
      setCountProjectsInRange(setDataInRange(SavedView?.projects));
    } catch (error) {
      setTotalProjects(SavedView?.projects?.length ?? 0);
      setCountProjectsInRange(setDataInRange(SavedView?.projects));
    }
  }

  const getConnections = () => {
    try {
      setTotalConnections(SavedView?.connections?.length ?? 0);
      setCountConnectionsInRange(setDataInRange(SavedView?.connections));
    } catch (error) {
      setTotalConnections(SavedView?.connections?.length ?? 0);
      setCountConnectionsInRange(setDataInRange(SavedView?.connections));
    }
  }

  const getAssociations = useCallback(
    async () => {
      try {
        const associations = SavedView?.associations; 
        setQtdUsersInProjects(associations?.length ?? 0);
      } catch (error) {
        setQtdUsersInProjects(SavedView?.associations?.length ?? 0);
      }
    }, [SavedView?.associations]);


  useEffect(() => {
    getUsers();
    getProjects();
    getConnections();
    getAssociations();
  }, []);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"> 
            <button type="button" className="btn btn-primary mb-2" onClick={handleClick}>{textRange[SavedView?.index + 1] ?? textRange[0]}</button>
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
                        {` ${percentBy(countUsersInRange[SavedView?.index], totalUsers)}%` }
                      </span>{" "}
                      <span className="text-nowrap">{textRange[SavedView?.index]}</span>
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
                        { ` ${percentBy(countConnectionsInRange[SavedView?.index], totalConnections)}%` }
                      </span>{" "}
                      <span className="text-nowrap">{textRange[SavedView?.index]}</span>
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
                        <span className="h2 font-weight-bold mb-0">{` ?? ${averageBy(qtdUsersInProjects, totalProjects)}` }</span>
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
                        {` ${percentBy(countProjectsInRange[SavedView?.index], totalProjects)}%`}
                      </span>{" "}
                      <span className="text-nowrap">{textRange[SavedView?.index]}</span>
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
