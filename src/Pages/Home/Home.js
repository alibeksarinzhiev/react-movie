import React from 'react';
import Now from "./now/now";
import Trailer from "./trailer/trailer";
import Person from './person/person';
import News from './news/news';
import'./home.scss'

const Home = () => {
    return (
        <>
           <Now/>
            <Trailer/>
            <Person/>
            <News/>


        </>
    );
};

export default Home;