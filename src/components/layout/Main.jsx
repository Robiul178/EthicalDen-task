// import React from 'react';

import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import Home from "../pages/Home/Home";

const Main = () => {
    return (
        <div >
            <div className="max-w-6xl mx-auto">
                <Header />
            </div>
            <div >
                <Home />
            </div>
            <Footer />
        </div>
    );
};

export default Main;