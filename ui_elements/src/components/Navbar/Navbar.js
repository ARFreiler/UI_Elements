import React from 'react';

import '../Navbar/Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <div class="topnav">
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link1' ? 'nav-link active' : 'nav-link'}>link 1</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link2' ? 'nav-link active' : 'nav-link'}>link 2</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link3' ? 'nav-link active' : 'nav-link'}>link 3</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link4' ? 'nav-link active' : 'nav-link'}>link 4</a>
            </div>
        </div>
    );
};


export default Navbar;