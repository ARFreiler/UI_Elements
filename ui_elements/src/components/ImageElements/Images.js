import React from 'react';


import ExpandingCard from '../ExpandingCards/ExpandingCard';
import './Images.css';

const Images = () => {
    return (
        <div className="container">
            <div className="images">
                <div className="element-one">
                    <p>images</p>
                    <ExpandingCard />

                </div>
            </div>
        </div>
    );
};

export default Images;