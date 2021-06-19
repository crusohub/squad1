import ProjectData from "../http-common"

//Pega um projeto "existente" na api através do seu id 
const getProjectById = (projId) =>{
    return ProjectData.get("projeto/"+projId)
}

//Pega todos os projetos da api

const getAllProject = () =>{
    return ProjectData.get("projeto/")
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

const createProject = (projData) =>{
    return ProjectData.post("/projeto/",projData)
}

/*
    Atualizar os Dados do Projeto

    Obs: Os campos existente na api estão no comentario anterior !
*/
const updateProject = (projId, projData) =>{
    return ProjectData.put("/projeto/"+ projId, projData)
}

//Deleta Projeto 
const deleteProject = (projId) =>{
    return ProjectData.delete("/projeto/"+projId)
}


//const deleteAllAssociation = (assId) =>{
//}


export default {
    getProjectById,
    getAllProject,
    createProject,
    updateProject,
    deleteProject
}