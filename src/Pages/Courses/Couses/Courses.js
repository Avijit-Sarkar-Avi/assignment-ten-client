import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetail from '../../Shared/Cards/CardDetail/CardDetail';

const Courses = () => {
    const tutorials = useLoaderData();

    return (
        <div>
            <h2>This is Courses has new {tutorials.length}</h2>
            {
                tutorials.map(detail => <CardDetail
                    key={detail.id}
                    detail={detail}
                ></CardDetail>)
            }
        </div>
    );
};

export default Courses;