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

  const setInfo = useCallback(() => {
    setUsers(getUsers() ?? users);
    setProjects(getProjects() ?? projects);
    setConnections(getConnections() ?? connections);
    setAssociations(getAssociations() ?? associations);
  }, []);

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
    return data;
  }

  const getProjects = async () => {
    const { data } = await ProjectDataService?.getAllProject();
    return data;
  }

  const getConnections = async () => {
    const { data } = await ConexaoDataService?.getConnections(); 
    return data;
  }

  const getAssociations = async () => {
    const { data } = await AssociationDataService?.getAllAssociation();
    return data;
  }

  useEffect(() => {
    setTimeout(() => { setInfo(); }, 1);
    setInterval(() => { setInfo(); }, 90000);
  }, [setInfo]);

  return (
      <SaveView.Provider value={SaveViewData}>
        { children }
      </SaveView.Provider>
  );
};

export const useSaveView = () => useContext(SaveView);

export default SaveViewProvider;

