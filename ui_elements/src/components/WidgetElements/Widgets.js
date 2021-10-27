import React from 'react';
import HiddenSearch from '../HiddenSearch/HiddenSearch';

import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets-container">
            <h2 className="widgets-text">Random Widgets Selection</h2>
            <div className="widgets-panels">
                <div className="widget-one">
                    <HiddenSearch />
                </div>
            </div>
        </div>
    );
};

export default Widgets;