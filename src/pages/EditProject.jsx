import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditProject() {



    const { editid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/projects/' + editid).then((res) => {
            return res.json();

        }).then((resp) => {
            idchange(resp.id);
            titlechange(resp.title);
            detailchange(resp.detail);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState('');
    const [title, titlechange] = useState('');
    const [detail, detailchange] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectdata = { title, detail };

        fetch('http://localhost:8000/projects/' + editid, {
            method: " PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectdata)
        }).then((res) => {
            alert('Saved')
            navigate('/')
        }).catch((err) => {
            console.log(err.message);
        })

    }

    return (

        <form className='container' onSubmit={handleSubmit}>
            <div className='card'>
                <div className='card-title mt-5' style={{ color: '#AC302F' }}><h2>Edit Form</h2></div>
                <div className="card-body">
                    <div className="form-group w-50" style={{ margin: '0 auto' }}>
                        <div className="d-flex" style={{ flexDirection: 'column' }}>
                            <label className="form-label">ID</label>
                            <input style={{ fontSize: '20px' }} value={id} type='id' disabled='disabled' className='p-2' placeholder='Type Id'></input>
                            <label value={title} className="form-label p-2" style={{ fontSize: '24px' }}>Title</label>
                            <input style={{ fontSize: '20px' }} value={title} className='p-2' type="text" onChange={e => titlechange(e.target.value)} placeholder='Type Title'></input>

                            <label className="form-label" style={{ fontSize: '24px' }}>Details</label>
                            <textarea className='p-3' style={{ fontSize: '18px' }} value={detail} onChange={e => detailchange(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <Link to='/' className='btn btn-outline-success mt-4' style={{ float: 'left' }}>Back</Link>
                        <button type='submit' className='btn btn-outline-info mt-4' style={{ float: 'right' }}>Update Project</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default EditProject;
