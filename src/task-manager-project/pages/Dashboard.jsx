import React, {useEffect, useState} from 'react'
import {TaskCard} from "../components/card-components/TaskCard.jsx";
import {useNavigate} from "react-router-dom";
import useTaskContext from "../context/TaskContext.jsx";
import {ReturnHome} from "../components/user-components/ReturnHome.jsx";
import {Logout} from "../components/user-components/Logout.jsx";
import useUContext from "../context/UserContext.jsx";

export const Dashboard = () => {
    const navigate = useNavigate();
    const {currTasks, filterByCategory, setTasks, Tasks} = useTaskContext();
    const [filterCategory, setFilterCategory] = useState('');
    const {deleteUser, currUser} = useUContext();

    // to handle account deletion :

    const deleteAccHandler = (e) => {
        e.preventDefault();
        const dltUsername = prompt("Enter your username");
        const dltPass = prompt("Enter your password");
        if(currUser.username === dltUsername && currUser.password ===  dltPass) {

            const updatedTasks =  Tasks.filter(task => task.currUserId !== currUser.userId);
            setTasks(updatedTasks);
            localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
            deleteUser(currUser);
            alert("Account deleted permanently successfully");
            navigate('/');
        }
        else alert("Entered username / password is incorrect")
    }

    // to handle filter search :

    useEffect(() => {
            filterByCategory(filterCategory);
    }, [filterCategory]);


    useEffect(() => {
        const curr = JSON.parse(localStorage.getItem('currUser'));
        if(!curr) {
            navigate('/');
        }
    }, []);

    return (
        <div className="page dashboard-page">
            <div className="dashboard-header">
                <ReturnHome/>
                <div className="header-actions">
                    <button className="btn danger" onClick={deleteAccHandler}>Delete my account</button>
                    <Logout/>
                </div>
            </div>

            <div className="dashboard-controls">
                <button className="btn primary" onClick={() => navigate('/createCard')}>Add a new task</button>
                <input
                    className="text-input"
                    type='text'
                    placeholder="Filter by category"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                />
            </div>

            <div className='tasks-display'>
                {currTasks.map((prev) => {
                    return (
                        <TaskCard
                            key={prev.taskId}
                            Task={prev}
                        />
                    )
                })}
            </div>
        </div>
    )
}
