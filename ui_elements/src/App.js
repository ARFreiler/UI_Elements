// import React from 'react';

// import './App.css';
import Content from "./components/Content";


// const App = () => <Content />;

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';
// import Content from "./components/Content";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import Widgets from './components/WidgetElements/Widgets';


// const App = () => <Content />;
function App() {
    return (
        <div className="App">
            <Header />
            {/* <Navbar /> */}
            <Content />

            <Footer />
        </div>
    )
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));