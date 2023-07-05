import React, {useContext, useEffect, useState} from 'react';
import './now.scss'
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";


const Now = () => {
const {movies} = useContext(CustomContext)

    return (
        <section className='now'>
            <div className="now__container container">
                <div className="now__navigation">
                <h2>Сейчас в кино</h2>
                <ul className='now__lists'>
                    <li>Все</li>
                    <li>Боевики</li>
                    <li>Приключения</li>
                    <li> Комедия</li>
                    <li>Фантастика</li>
                    <li>Триллер</li>
                    <li>Драмма</li>
                </ul>
                </div>
                <div className="now__movies">
                    {
                        movies.map((el)=>(
                            <div key={el.id} className='now__card'>
                                <Link to={`onemovie/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h4>{el.title}</h4>
                                <h5>{el.genre}</h5>
                                <h2>{el.year}</h2>
                                <span className='btn1'>
                                    <button className={el.rate >= 7 ?"rategren":'ratebrown'}>{el.rate}</button>
                                </span>
                                <span className='btn2'>
                                    <button className={el.rateWait >=70?"ratewaitgreen":"ratewaitbrown"}>{el.rateWait}%</button>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Now;