import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const tutorials = useLoaderData();
    console.log(tutorials)
    return (
        <div>
            <h2>This is Courses has new {tutorials.length}</h2>
        </div>
    );
};

export default Courses;