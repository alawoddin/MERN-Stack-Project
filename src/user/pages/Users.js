import React from 'react';
import UserList from '../components/UserList';

import User from '../data/users.json';

const Users = () => {
    // const Users = [
    //     {
    //         id : "u1",
    //         name : "alawoddin",
    //         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ab4tAB79y8BEUHWVk7mWAbSH1EStX3WSW8mo2m3Ogw&s=10",
    //         place : 3
    //     }
    // ]
    return (
        <div>
            <UserList items={User} />
        </div>
    );
};

export default Users;