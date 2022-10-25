import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetail from '../../Shared/Cards/CardDetail/CardDetail';


const Home = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            <h2>Total Data: {allDetails.length}</h2>
            {
                allDetails.map(detail => <CardDetail
                    key={detail.id}
                    detail={detail}
                ></CardDetail>
                )
            }
        </div>
    );
};

export default Home;