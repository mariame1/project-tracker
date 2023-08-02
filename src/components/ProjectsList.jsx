import React from 'react'
import ProjectsItem from './ProjectsItem';
import { Link } from 'react-router-dom';

function ProjectList(props) {
  
  return (
    <>
    
          <ul >
            
            {props.projects.map((project) => (
              <ProjectsItem
                key={project.id}
                project={project}
              />

            )) }
          </ul>
          {/* <Link to="/project/create"  className='btn btn-outline-warning mt-5 m-5' style={{float: 'right', fontSize: '24px'}}>create</Link> */}
          </>
        
  ) 
}

export default ProjectList;
