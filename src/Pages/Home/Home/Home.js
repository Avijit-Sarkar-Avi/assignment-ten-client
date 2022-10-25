import React from 'react';
import { useLoaderData } from 'react-router-dom';
import detailCard from '../../Shared/Cards/Card/detailCard';

const Home = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            <h2>Total Data: {allDetails.length}</h2>
            {
                allDetails.map(detail => <detailCard
                    key={detail.id}
                    detail={detail}
                ></detailCard>)
            }
        </div>
    );
};

export default Home;