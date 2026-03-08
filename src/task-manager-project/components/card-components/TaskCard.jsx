import React, {useState} from 'react'
import useTaskContext from "../../context/TaskContext.jsx";

export const TaskCard = ({Task}) => {
    const {deleteTask, updateTask} = useTaskContext();
    const [status, setStatus] = useState(Task.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(Task.title);
    const [editedDesc, setEditedDesc] = useState(Task.desc);
    const [editedPriority, setEditedPriority] = useState(Task.priority);
    const [editedCategory, setEditedCategory] = useState(Task.category);

    // this file is to display the card data :
    const handleDlt = (e) => {
        e.preventDefault();
        deleteTask(Task.taskId);
    }

    const handleStatusChange = (e) => {
        const newStatus = e.target.checked;
        setStatus(newStatus);
        updateTask({...Task, completed: newStatus});
    }

    const handleSave = (e) => {
        e.preventDefault();
        updateTask({
            ...Task,
            title: editedTitle,
            desc: editedDesc,
            priority: editedPriority,
            category: editedCategory,
            completed: status,
        });
        setIsEditing(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setEditedTitle(Task.title);
        setEditedDesc(Task.desc);
        setEditedPriority(Task.priority);
        setEditedCategory(Task.category);
        setStatus(Task.completed);
        setIsEditing(false);
    }

    return (
        <div className="task-card">
            {isEditing ? (
                <form className="task-card-edit" onSubmit={handleSave}>
                    <input
                        className="task-input title-input"
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        className="task-input desc-input"
                        value={editedDesc}
                        onChange={(e) => setEditedDesc(e.target.value)}
                    />
                    <div className="task-row">
                        <select
                            className="task-select"
                            value={editedPriority}
                            onChange={(e) => setEditedPriority(e.target.value)}
                        >
                            <option value="">Priority</option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                        <input
                            className="task-input category-input"
                            type="text"
                            value={editedCategory}
                            onChange={(e) => setEditedCategory(e.target.value)}
                            placeholder="Category"
                        />
                    </div>
                    <div className="task-row">
                        <label className="task-status">
                            <input
                                type="checkbox"
                                checked={status}
                                onChange={handleStatusChange}
                            />
                            <span>{status ? 'Completed' : 'Pending'}</span>
                        </label>
                    </div>
                    <div className="task-actions">
                        <button className="btn primary" type="submit">Save</button>
                        <button className="btn secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="topCard">
                        <h2>{Task.title}</h2>
                    </div>
                    <div className="middle">
                        <h3>{Task.desc}</h3>
                        <h4 className="priority-tag">{Task.priority}</h4>
                    </div>
                    <div className="lower">
                        <h4 className="category-tag">{Task.category}</h4>
                        <div className="status-row">
                            <span>Status: {status ? 'Completed' : 'Pending'}</span>
                            <input
                                type="checkbox"
                                checked={status}
                                onChange={handleStatusChange}
                            />
                        </div>
                    </div>
                    <div className="task-actions">
                        <button className="btn secondary" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="btn danger" onClick={handleDlt}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}
