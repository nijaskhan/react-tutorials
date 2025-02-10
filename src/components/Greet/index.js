import React from 'react'

const Greet = ({ user }) => {
    return (
        <div>
            <h2>Welcome, {user}!</h2>
            <p>This is your protected content.</p>

            <button className='btn btn-primary'>Click me</button>
        </div>
    )
};

export default Greet;
