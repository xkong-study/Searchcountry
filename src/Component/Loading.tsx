import React from 'react';
import '../css/BallLoader.css';

const BallLoader = () => {
    return (
        <div className="ball-loader" data-testid="ball-loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
        </div>
    );
};

export default BallLoader;
