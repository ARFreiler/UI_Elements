import React from 'react';

import "./HiddenSearch.css";

const HiddenSearch = () => {

    // const search = document.querySelector('.search')
    // const btn = document.querySelector('.btn')
    // const input = document.querySelector('.input')

    // btn.addEventListener('click', () => {
    //     search.classList.toggle('active')
    //     input.focus()
    // })

    return (
        <div className="hidden-search-container">
            <div className="hidden-search">
                <h1>Hidden Search Widget</h1>
                <div className="widget-panel">
                    <div class="search">
                        <input type="text" class="input" placeholder="Search..." />
                        <button class="btn"><i class="fas fa-search"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default HiddenSearch;