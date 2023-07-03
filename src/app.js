import React, {useEffect, useState} from 'react';
 import{Routes, Route} from "react-router-dom";
 import Layout from "./Layout/Layout";


import './style/style.scss'
import Home from "./Pages/Home/Home";
import OneMovie from "./Pages/oneMovie/oneMovie";
const App = () => {






    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
<Route path={''} element={<Home/>}/>
<Route path={'onemovie/:id'} element={<OneMovie/>}/>

            </Route>




        </Routes>
    );
};

export default App;