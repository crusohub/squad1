import React, {useState} from "react"

const ProjectContext = React.createContext([ {}, ()=> {}])

const ProjectProvider = (props) => {
    const dataProjectInitial = {
        "id": "1",
        "image": "image 1",
        "projectname": " Projeto de Eletrônica",
        "projectname1": "Projeto de Robótica",
        "projectname2": "Projeto de Apoio",
        "projectname3": "Projeto de Logística",
        "status": "status 1",
        "budget": "budget 1",
        "completed": "completed 1"
    }

    const [project, setProject] = useState(dataProjectInitial)

    return(
        <ProjectContext.Provider value={[project,setProject]}>
            {props.children}
        </ProjectContext.Provider> 
    )
}

export {ProjectContext, ProjectProvider}
