import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const Users = [
        {
            id : "u1",
            name : "alawoddin",
            image : "https://www.magnific.com/free-photos-vectors/developer-illustration",
            place : 3
        }
    ]
    return (
        <div>
            <UserList items={Users} />
        </div>
    );
};

export default Users;