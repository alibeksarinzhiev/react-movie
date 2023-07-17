import React, {useEffect, useState} from 'react';
 import{Routes, Route} from "react-router-dom";
 import Layout from "./Layout/Layout";
 import Login from './Pages/login/login';
import './style/style.scss'
import Home from "./Pages/Home/Home";
import OneMovie from "./Pages/oneMovie/oneMovie";
import Register from "./Pages/register/register";
import Search from "./Pages/search/search";
import TopMovie from './Pages/topMovie/topMovie';
const App = () => {






    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
<Route path={''} element={<Home/>}/>
<Route path={'onemovie/:id'} element={<OneMovie/>}/>

<Route path={'register'} element={<Register/>}/>


                <Route path='search' element={<Search/>}/>
                <Route path='/topmovie' element={<TopMovie/>}/>
            </Route>
      <Route path='/login' element={<Login/>}/>



        </Routes>
    );
};

export default App;