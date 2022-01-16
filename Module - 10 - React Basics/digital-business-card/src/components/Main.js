import React from 'react';
import About from './About';
import Interests from './Interests';
import Info from './Info'
import Footer from './Footer'

export default function Main() {
    return(
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}