import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Details() {
    const { detailid } = useParams();
    const [projectdata, setProjectdata] = useState({});

    useEffect(() => {
        fetch(" http://localhost:8000/projects/" + detailid).then((res) => {
            return res.json();
        }).then((resp) => {
            setProjectdata(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, []);

    return (
        <>
            {projectdata &&
                <div>
                    <div className='card w-75 mt-5 mb-5 p-5' style={{backgroundColor: '#E8E9EB', margin: '0 auto'}}>
                    <h1 style={{textAlign: 'left', margin: '10px', fontSize: '52px'}}>Project Details: </h1>
                    <h3 style={{textAlign: 'left', margin: '10px', color: '#AC302F'}}>ID: {projectdata.id}</h3>
                    <h2 style={{textAlign: 'left', margin: '10px', color: '#AC302F'}}>{projectdata.title}</h2>
                    <p style={{textAlign: 'left', margin: '10px', fontSize: '22px'}}>{projectdata.detail}</p>
                    <h2 style={{textAlign: 'left', margin: '10px', color: '#AC302F'}}>Complete: {projectdata.complete}</h2>
                    </div>

                    <Link  to="/" className="btn btn-outline-warning" style={{float: 'right', margin: '10px'}}>Back</Link>
                    
                </div>

            }
        </>
    )
}

export default Details;
