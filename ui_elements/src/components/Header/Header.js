import React from 'react';
import '../Header/Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container">

            <div className="header">
                <div className="header-text">
                    <h1 className="title">UI Elements</h1>
                    <p className="tag">A curio of components and features for webpage design.</p>
                </div>
                <div className="nav-component">
                    <Navbar />
                </div>
            </div>
            {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        </div>
    );
};

export default Header;