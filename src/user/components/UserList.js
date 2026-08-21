import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>User Not Found...</h2>
      </div>
    );
  }

  return (
    <ul>
        {props.items.map(user => {
            return <UserItem 
            key={user.id} 
            id={user.id}
            image={user.image}
            name={user.name}
            place={user.place}
            />
        })}
    </ul>
  );
};

export default UserList;