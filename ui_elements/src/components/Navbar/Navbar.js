import React from 'react';
// import { Link } from "react-router-dom";

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { StyledLink } from "../../styles";

import '../Navbar/Navbar.css';
import Widgets from '../WidgetElements/Widgets';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <div class="topnav">
                <div className="nav-content">
                    {/* <h1>this is navbar</h1> */}
                    <Router>
                        <nav>
                            <StyledLink to="/scenes/home-scene/home">Home</StyledLink>
                            <StyledLink to="/scenes/about-scene/about">Widgets</StyledLink>
                            <StyledLink to="/scenes/work/work">Graphics</StyledLink>
                            <StyledLink to="/scenes/contact-scene/contact">Components</StyledLink>
                        </nav>
                        <Switch>
                            <Route exact path="/scenes/home-scene/home">
                                {/* <Home /> */}
                            </Route>,
          <Route exact path="/scenes/about-scene/about">
                                <Widgets />
                            </Route>,
          <Route exact path="/scenes/work-scene/work">
                                {/* <Graphics /> */}
                            </Route>,
          <Route exact path="/scenes/contact-scene/contact">
                                {/* <Components /> */}
                            </Route>

                        </Switch>
                    </Router>
                </div>
                {/* <a href="#widgets" onClick={() => handlePageChange('Widgets')} className={currentPage === 'Link1' ? 'nav-link active' : 'nav-link'}>Widgets</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link2' ? 'nav-link active' : 'nav-link'}>link 2</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link3' ? 'nav-link active' : 'nav-link'}>link 3</a>
                <a href="" onClick={() => handlePageChange('')} className={currentPage === 'Link4' ? 'nav-link active' : 'nav-link'}>link 4</a> */}
                {/* <Link to="/">
                    <button class="nav-button" variant="outlined">
                        Home
                    </button>
                </Link>
                <Link to="/widgets">
                    <button class="nav-button" variant="outlined">
                        Widgets
                    </button>
                </Link>
                <Link to="/images">
                    <button class="nav-button" variant="outlined">
                        Images
                    </button>
                </Link> */}
            </div>
        </div>
    );
};


export default Navbar;