import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateProject() {
    const [id, idchange] = useState('');
    const [title, titlechange] = useState('');
    const [detail, detailchange] = useState('');
    const projectdata = { title, detail };

    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/projects", {

            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(projectdata)
        }).then((res) => {
            alert('save project ?');
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        });

    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='card'>
                <div className='card-title mt-5' style={{ color: '#AC302F' }}><h2>Create Form</h2></div>
                <div className="card-body">
                    <div className="form-group w-50" style={{ margin: '0 auto' }}>
                        <div className="d-flex" style={{ flexDirection: 'column' }}>
                            <label className="form-label">ID</label>
                            <input value={id} type='id' disabled='disabled' className='p-2' placeholder='Type Id'></input>
                            <label value={title} className="form-label p-2">Title</label>
                            <input className='p-2' type="text" onChange={e=>titlechange(e.target.value)} placeholder='Type Title'></input>

                            <label className="form-label">Details</label>
                            <textarea style={{padding: '13px'}} value={detail} onChange={e => detailchange(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className='btn btn-outline-success mt-4' style={{ float: 'right' }}>Done</button>
                    </div>
                </div>
            </div>
        </form>
    )

    
    }

   


export default CreateProject;
