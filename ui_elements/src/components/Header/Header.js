import React from 'react';
import '../Header/Header.css';
import '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">UI Elements</h1>
                <p className="tag">A collection of UI elements for webpage design.</p>
            </div>
            {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        </div>
    );
};

export default Header;