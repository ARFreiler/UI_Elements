// import React, { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';

// import Navbar from './Navbar/Navbar';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import UiElements from './UiElements/UiElements';
// import Homepage from './Homepage/Homepage';
import Widgets from './WidgetElements/Widgets';
// import Images from './ImageElements/Images';

import './Content.css';

const Content = () => {
    return (
        <div className="content-content">
            {/* <Homepage /> */}
            <Widgets />
        </div>
        // <Switch>
        //     <Route exact path='/' component={Homepage}></Route>
        //     <Route exact path='/widgets' component={Widgets}></Route>
        //     <Route exact path='/images' component={Images}></Route>
        // </Switch>
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