import React from 'react';

import { FaPalette } from "react-icons/fa";


// import ExpandingCard from '../ExpandingCards/ExpandingCard';
import './Graphics.css';

const Graphics = () => {
    return (
        <div className="graphics-container">
            <div className="graphics-text-panel">
                <h2 className="graphics-header">Graphics & More</h2>
                <div className="graphics-icons">
                    <FaPalette siz={30} /> <p className="graphics-icons-text">small and simple solutions</p>

                </div>
            </div>
            <div className="graphics-panels">
                <div className="graphics-one">
                    <p>praphics one</p>
                </div>
            </div>
        </div>
    );
};

export default Graphics;