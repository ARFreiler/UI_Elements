import React, { useState } from 'react';

import Navbar from './Navbar';
import Header from './pages/Header';
import Footer from './pages/Footer';
import UiElements from './pages/UiElements';

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