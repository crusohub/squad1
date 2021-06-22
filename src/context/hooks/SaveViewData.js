import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import UserDataService from '../../service/UserDataService';
import ProjectDataService from '../../service/ProjectDataService';
import ConexaoDataService from '../../service/ConexaoDataService';
import AssociationDataService from '../../service/AssociationDataService';

const SaveView = createContext();


const SaveViewProvider = ({ children  }) => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [connections, setConnections] = useState([]);
  const [index, setIndex] = useState(0);
  const TIME_IN_MILISECONDS = 120000;

  const SaveViewData = {
    users,
    projects,
    associations,
    connections,
    index,
    setUsers,
    setProjects,
    setAssociations,
    setConnections,
    setIndex,
  };

  const getUsers = async () => {
    const { data } = await UserDataService?.getUsers(); 
    setUsers(data ?? users);
  }

  const getProjects = async () => {
    const { data } = await ProjectDataService?.getAllProject();
    setProjects(data ?? projects);
  }

  const getConnections = async () => {
    const { data } = await ConexaoDataService?.getConnections(); 
    setConnections(data ?? connections);
  }

  const getAssociations = async () => {
    const { data } = await AssociationDataService?.getAllAssociation();
    setAssociations(data ?? associations);
  }

  const setInfo = useCallback( async () => {
    getUsers();
    getProjects();
    getConnections();
    getAssociations();
  }, []);

  useEffect(() => {
    setTimeout(() => { setInfo(); console.log("Timeout")}, 1);
    setInterval(() => { setInfo(); console.log("interval")}, TIME_IN_MILISECONDS);
  }, [setInfo]);


  return (
      <SaveView.Provider value={SaveViewData}>
        { children }
      </SaveView.Provider>
  );
};

export const useSaveView = () => useContext(SaveView);

export default SaveViewProvider;

