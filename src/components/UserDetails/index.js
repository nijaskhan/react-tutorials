import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function userLoader({ params }) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        return response?.data;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

const UserDetails = () => {
    const user = useLoaderData();

    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {user?.name}</p>
            <p>User email: {user?.email}</p>
            <p>User website: {user?.website}</p>
        </div>
    )
}

export default UserDetails;
