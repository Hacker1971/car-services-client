import React from 'react';
import Hero from './Hero';
import Service from '../services/Service';
import About from '../about/About';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;