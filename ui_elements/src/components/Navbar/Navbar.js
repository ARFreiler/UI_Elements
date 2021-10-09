import React from 'react';

import '../Navbar/Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <div class="topnav">
                <p>this will be the navbar</p>
                {/* <a href="#resume" onClick={() => handlePageChange('CV')} className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}>My CV</a>
                <a href="#contact" onClick={() => handlePageChange('Contact Me')} className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                <a href="#aboutme" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>About Me</a> */}
            </div>
        </div>
    );
};


export default Navbar;