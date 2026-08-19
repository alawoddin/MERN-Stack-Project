import React from 'react';

const NewGoal = props => {

    const addGoal = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text : "my goal"
        };

        // console.log(newGoal);
        props.onAddGoal(newGoal);
    };
    return (
        <div>
            <form onSubmit={addGoal}>
                <input type='text' />
                <button type='submit' >Click me</button>
            </form>
        </div>
    );
};

export default NewGoal;