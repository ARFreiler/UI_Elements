import React, { useState } from 'react';

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