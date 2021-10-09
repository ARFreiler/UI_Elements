// import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Navbar from './Navbar/Navbar';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import UiElements from './UiElements/UiElements';
import Homepage from './pages/Homepage/Homepage';
import Widgets from './pages/WidgetElements/Widgets';
import Images from './pages/ImageElements/Images';

import './Content.css';

const Content = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Homepage}></Route>
            <Route exact path='/widgets' component={Widgets}></Route>
            <Route exact path='/images' component={Images}></Route>
        </Switch>
    );
};

export default Content;

/* NEW CODE */
//////////////////////////////////////////////////////////
/* OLD CODE */


// export default function Content() {
//     const [currentPage, setCurrentPage] = useState('UI Elements');

//     const renderPage = () => {

//         return <UiElements />;

//         // if (currentPage === 'Widgets') {
//         //     return <Widgets />;
//         // }
//         // if (currentPage === 'CV') {
//         //     return <CV />;
//         // }
//         // return <Contact />;
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div class="container">
//             <Header />
//             <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()}
//             <div className="content">
//                 {/* <UiElements /> */}
//             </div>
//             <Footer />
//         </div>
//     )
// }