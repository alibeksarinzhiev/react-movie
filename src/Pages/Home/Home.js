import React from 'react';
import Now from "./now/now";
import Trailer from "./trailer/trailer";
import Person from './person/person';
import News from './news/news';
import Expected from './expected novelties/expected';
import Cass from './cass/cass';
import'./home.scss'

const Home = () => {
    return (
        <>
           <Now/>
            <Trailer/>
            <Person/>
            <News/>
            <Expected />
            <Cass/>
        </>
    );
};

export default Home;