import React from 'react';

import './Goal.css';

const Goal = props => {
    console.log(props.goal)
    return (
        <div>
            <ul>
                {props.goal.map(goal => {
                    return <li key={goal.id}>{goal.text}</li>
                })}
            </ul>

             {/* <ul >
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul> */}
        </div>
    );
};

export default Goal;