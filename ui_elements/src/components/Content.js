import React, { useState } from 'react';

import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import UiElements from './UiElements/UiElements';
import Widgets from './WidgetElements/Widgets';

import './Content.css';

export default function Content() {
    const [currentPage, setCurrentPage] = useState('UI Elements');

    const renderPage = () => {

        return <UiElements />;

        // if (currentPage === 'Widgets') {
        //     return <Widgets />;
        // }
        // if (currentPage === 'CV') {
        //     return <CV />;
        // }
        // return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="container">
            <Header />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <div className="content">
                {/* <UiElements /> */}
            </div>
            <Footer />
        </div>
    )
}