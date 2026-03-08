import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import useTaskContext from "../../context/TaskContext.jsx";
import {ReturnHome} from "../user-components/ReturnHome.jsx";
import useUContext from "../../context/UserContext.jsx";

export const CreateCard = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState('');
    const {createTask} = useTaskContext();
    const [category, setCategory] = useState('');
    const [completed, setCompleted] = useState(false);
    const {currUser} = useUContext();


    const handleAdd = (e) => {
        e.preventDefault();
        // basic validation :
        if(title === '' || desc === '') {
            alert('Please enter a title and description');
            return;
        }
        if(!currUser) {
            alert('Please login first');
            navigate('/login');
            return;
        }

        createTask({
            title,
            desc,
            priority,
            category,
            completed,
        });
        alert('Task created successfully');
        navigate('/dashboard');
    }

    // if the user tries to access create card page via url without logging in :
    useEffect(() => {
        const curr = JSON.parse(localStorage.getItem('currUser'));
        if(!curr) navigate('/');
       }, []);

    return (
        <div className="page create-card-page">
            <ReturnHome/>
            <div className="card-container">
                <h2>Create a new task</h2>
                <div className='top-section'>
                    <input
                        className="text-input"
                        type='text'
                        placeholder='Enter task title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="text-area"
                        placeholder='Enter task description'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div className='priority row'>
                    <label>Priority:</label>
                    <button
                        type="button"
                        className={`btn chip ${priority === 'low' ? 'active' : ''}`}
                        onClick={() => setPriority('low')}
                    >
                        Low
                    </button>
                    <button
                        type="button"
                        className={`btn chip ${priority === 'high' ? 'active' : ''}`}
                        onClick={() => setPriority('high')}
                    >
                        High
                    </button>
                </div>

                <div className='category row'>
                    <label>Category:</label>
                    <input
                        className="text-input"
                        type='text'
                        placeholder='Enter category'
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div className='features row'>
                    <label>Completed:</label>
                    <input
                        type='checkbox'
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </div>

                <button className="btn primary full-width" onClick={handleAdd}>Add task</button>
            </div>
        </div>
    )
}
