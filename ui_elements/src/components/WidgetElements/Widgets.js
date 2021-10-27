import React from 'react';
// import HiddenSearch from '../HiddenSearch/HiddenSearch';

import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets-container">
            <div className="widget-text-panel">
                <h2 className="widgets-text">Widgets & More</h2>
            </div>
            <div className="widgets-panels">
                <div className="widget-one">
                    {/* <HiddenSearch /> */}
                </div>
            </div>
        </div>
    );
};

export default Widgets;