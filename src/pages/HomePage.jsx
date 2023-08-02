import React, { useEffect, useState } from 'react'
import ProjectList from '../components/ProjectsList';
import { Link } from 'react-router-dom';


 function HomePage() {
    const[projects, setProjects] = useState([]);
    
    useEffect(()=>{
        async function fetchProjects(){
            try{
                const response = await fetch(' http://localhost:8000/projects');
                const fetchedProjects = await response.json();
                console.log('The projects are here !', fetchedProjects);
                setProjects(fetchedProjects);
            }catch(error){
                console.log(error);
            }
        }
        fetchProjects();
    }, []);


  return (
    <>
    <div>
    
    <ProjectList projects={projects} />
    {/* <Link to={`/project/create/${props.project.id}`} className='btn btn-outline-warning mt-5 m-5' style={{float: 'right', fontSize: '22px'}}>CREATE</Link> */}
    <Link to="/project/create"  className='btn btn-outline-warning mt-5 m-5' style={{float: 'right', fontSize: '24px'}}>create</Link>
    </div>
   
    </>
  )
}


export default HomePage;
