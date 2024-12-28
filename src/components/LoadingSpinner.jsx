import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='min-h-[40vh] flex justify-center items-center'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default LoadingSpinner;