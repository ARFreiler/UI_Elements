import React from 'react';
import { Link } from "react-router-dom";

import '../Navbar/Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <div class="topnav">
                <div className="nav-content">
                    <h1>this is navbar</h1>
                </div>
                {/* <a href="#widgets" onClick={() => handlePageChange('Widgets')} className={currentPage === 'Link1' ? 'nav-link active' : 'nav-link'}>Widgets</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link2' ? 'nav-link active' : 'nav-link'}>link 2</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link3' ? 'nav-link active' : 'nav-link'}>link 3</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link4' ? 'nav-link active' : 'nav-link'}>link 4</a> */}
                {/* <Link to="/">
                    <button class="nav-button" variant="outlined">
                        Home
                    </button>
                </Link>
                <Link to="/widgets">
                    <button class="nav-button" variant="outlined">
                        Widgets
                    </button>
                </Link>
                <Link to="/images">
                    <button class="nav-button" variant="outlined">
                        Images
                    </button>
                </Link> */}
            </div>
        </div>
    );
};


export default Navbar;