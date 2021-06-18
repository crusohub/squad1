import React, {useState} from "react"

const ProjectContext = React.createContext([ {}, ()=> {}])

const ProjectProvider = (props) => {
    const dataProjectInitial = {
        "id": "1",
        "image": "image 1",
        "projectname": "Marcos",
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
