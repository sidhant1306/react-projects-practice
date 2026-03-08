import React, {createContext, useContext, useEffect, useState} from "react";
import {ReturnHome} from "../components/user-components/ReturnHome.jsx";

const uContext = createContext();

export const UContextProvider = ({ children }) => {
    // use states for current user and all users :
    const [users, setUsers] = useState([]);
    const [currUser, setCurrUser] = useState(null);

    // while registering a new user :
    const createUser = (user) => {
        setUsers((prev) => [...prev, { ...user, userId: Date.now(), isLogin: false, userTaskId : Date.now()}]);
    };

    // to delete a user from the users list :
    const deleteUser = (currUser) => {
        const updatedUsers = users.filter((u) => u.userId !== currUser.userId);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currUser', JSON.stringify(null));
    };

    // we have added these useEffect here because we need localstorage to set the previous records everytime the page is refreshed,
    //not only when a particular page is run.
    // get all the previous users when we have refreshed the page :

    useEffect(() => {
        const usersList = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(usersList);
    }, []);

    // ensuring curr user stays logged in when refreshed :
    useEffect(() => {
        const currU = JSON.parse(localStorage.getItem('currUser') || 'null');
        if(currU) setCurrUser(currU);
    }, []);

    useEffect(() => {
       if(users.length > 0) localStorage.setItem('users', JSON.stringify(users));
    }, [users, setUsers]);

    useEffect(() => {
        if(currUser) localStorage.setItem('currUser', JSON.stringify(currUser))
    }, [currUser, setCurrUser]);
    return (
        <uContext.Provider value={{ users, createUser, deleteUser, setUsers, currUser, setCurrUser }}>
            {children}
        </uContext.Provider>
    );
};

const useUContext = () => {
    return useContext(uContext);
};

export default useUContext;


// WE CAN't do this because if we do this, setUsers is an asynchronous function so even if the page is refreshed the users list will not be updated after taking,
// elements from the localStorage on each refresh :


// useEffect( () => {
//     const prevUsersList = JSON.parse(localStorage.getItem('users') || []);
//
//     if(prevUsersList && prevUsersList.length > 0) {
//         // if we get some previous users stored in the localstorage :
//         console.log('setting users')
//          setUsers(prevUsersList)
//     }
//     console.log(users)
// }, []);
//
// // if we change the value of users array(add new user, delete or update) :
//
// useEffect(() => {
//     if(users.length > 0) {
//         localStorage.setItem('users', JSON.stringify(users))
//     }
//
// }, [users]);
