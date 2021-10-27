import React from 'react';
import HiddenSearch from '../HiddenSearch/HiddenSearch';
import { FaCogs } from "react-icons/fa"

import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets-container">
            <div className="widget-text-panel">
                <h2 className="widgets-header">Widgets & More</h2>
                <div className="widget-icons">
                    <FaCogs size={30} /><p className="widget-icons-text">small and simple solutions</p>
                </div>
            </div>
            <div className="widgets-panels">
                <div className="widget-one">
                    <HiddenSearch />
                </div>
            </div>
        </div>
    );
};

export default Widgets;