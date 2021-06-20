import AssociationData from "../http-common"

//Pega uma associação  entre usuario e projeto "existentes" na api através do seu id 
const getAssociationById = (assId) =>{
    return AssociationData.get("associacao/"+assId)
}

// Pega todas as associações existentes 
const getAllAssociation = () =>{
    return AssociationData.get(`associacao/`)
}

//Cria uma associação entre usuario e projeto 

/*
    ###                 ###
        Os Campos na Api 
    ###                 ###

    "id": "1",
    "projectid": "1",
    "userid": "1",
    "projectname": "project 1",
    "username": "user 1"
    
    */

const createAssociation = (assData) =>{
    return AssociationData.post("/associacao/"+assData)
}

/*
    Atualizar os Dados da Associação

    Obs: Os campos existente na api estão no comentario anterior !
*/
const updateAssociation = (assId, assData) =>{
    return AssociationData.put("/associacao/"+assId, assData)
}


// Deleta a associação por completo

const deleteAssociation = (assId) =>{
    return AssociationData.delete("/associacao/"+assId)
}


//const deleteAllAssociation = (assId) =>{
//}


export default {
    getAssociationById,
    getAllAssociation,
    createAssociation,
    updateAssociation,
    deleteAssociation
}