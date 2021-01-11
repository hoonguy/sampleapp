import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';

export default function App({param}) {
    const [page, setPage] = useState(param);
    useEffect(()=>{
        window.onpopstate = event=>{    // call by back button at browser
            setPage(evetn.state);
        };
    }, []);

    function onChangePage(e) {     // move to specific page
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage, '', `/${newPage}`);   // notify to browser that changed page(address to move)
        setPage(newPge);
    };

    const PageComponent = page === 'home' ? Home : About;   // rendering page upon to address

    return(
        <div className="container">
            <button data-page="home" onClick={onChangePage}>
                Home
            </button>
            <button data-page="about" onClick={onChangePage}>
                About
            </button>
            <PageComponent />
        </div>
    );
}