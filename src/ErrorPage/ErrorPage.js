import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-danger'>404 Error</h1>
            <h2>Please enter correct URL</h2>
            <p>URL could not find</p>
        </div>
    );
};

export default ErrorPage;