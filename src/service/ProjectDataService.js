import ProjectData from "../http-common"

//Pega um projeto "existente" na api através do seu id 
const getProjectById = () =>{
    return ProjectData.get(`projeto/${id}`)
}

//Pega todos os projetos da api

const getAllProject = () =>{
    return ProjectData.get(`projeto/`)
}
/*
    Cria um projeto

    ###                 ###
        Os Campos na Api 
    ###                 ###

    "id": "4",
    "image": "image 4",
    "projectname": "test project",
    "status": "delayed",
    "budget": "budget 4",
    "completed": "pending"


*/

const createProject = (assData) =>{
    return ProjectData.post(`/projeto/${assData}`)
}

/*
    Atualizar os Dados do Projeto

    Obs: Os campos existente na api estão no comentario anterior !
*/
const updateProject = (assId, assData) =>{
    return ProjectData.put(`/projeto/${assId}`,assData)
}

//Deleta Projeto 
const deleteProject = (assId) =>{
    return ProjectData.delete(`/projeto/${assId}`)
}


const deleteAllAssociation = (assId) =>{
}


export default {
    getProjectById,
    getAllProject,
    createProject,
    updateProject,
    deleteProject
}