import Context from '@mui/base/TabsUnstyled/TabsContext'
import React, { useContext } from 'react'
import Card from './Card'

const Projects = () => {

    const context = useContext(Context)
    const { projectData } = context

    return (
        <>

            <div className="projects" id="projects">
                <h1 className='project_heading'>Projects</h1>
                {
                    projectData.map((e) => {
                        return <div>
                            <Card key={e.projectTitle} data={e} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Projects