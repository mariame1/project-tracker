import React from 'react'
import { Link } from 'react-router-dom';

function ProjectsItem(props) {


    const removeFunction = () => {
        fetch(`  http://localhost:8000/projects/${props.project.id}`, {
          method: 'DELETE',
        }).then(() => {
          props.onDeleteProject(props.project.id)
         
        }).catch((error) => console.log(error));
      };

    return (
        <>
            <form className='container mt-5' style={{ transform: 'skew(-20deg)' }}>
                <div className='card bg-warning w-75' style={{ margin: '0 auto' }} >
                    <div className='card-body' style={{ backgroundColor: "#E8E9EB" }} >
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div class="container-fluid">
                                <Link to={`/project/details/${props.project.id}`} className="navbar-brand" ><h3>{props.project.title}</h3></Link>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                    </ul>
                                    <div className="d-flex g-4">
                                        <Link to={`/project/edit/${props.project.id}`} className="btn btn-outline-success" type="submit">Edit</Link>
                                        <button onClick={removeFunction} className="btn btn-outline-danger" type="submit">Delete</button>
                                        <Link className="btn btn-outline-info" type="submit">Toggle</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </form>


        </>


    )
}

export default ProjectsItem;
