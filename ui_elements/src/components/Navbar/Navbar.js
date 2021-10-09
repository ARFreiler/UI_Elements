import React from 'react';
import { Link } from "react-router-dom";

import '../Navbar/Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <div class="topnav">
                {/* <a href="#widgets" onClick={() => handlePageChange('Widgets')} className={currentPage === 'Link1' ? 'nav-link active' : 'nav-link'}>Widgets</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link2' ? 'nav-link active' : 'nav-link'}>link 2</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link3' ? 'nav-link active' : 'nav-link'}>link 3</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link4' ? 'nav-link active' : 'nav-link'}>link 4</a> */}
                <Link to="/">
                    <button variant="outlined">
                        Home
                    </button>
                </Link>
                <Link to="/widgets">
                    <button variant="outlined">
                        Widgets
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default Navbar;