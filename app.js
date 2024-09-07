import React from 'react';
import Header from './Header';
import About from './about';
import Contact from './aontact';
import './App.css'; // Optional for styling the overall layout

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <About />
            <Contact />
        </div>

    );
};
