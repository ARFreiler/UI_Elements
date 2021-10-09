import React, { useState } from 'react';

import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import UiElements from './UiElements/UiElements';

import './Content.css';

export default function Content() {
    const [currentPage, setCurrentPage] = useState('UI Elements');

    const renderPage = () => {

        return <UiElements />;

        // if (currentPage === 'Portfolio') {
        //     return <Portfolio />;
        // }
        // if (currentPage === 'CV') {
        //     return <CV />;
        // }
        // return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}