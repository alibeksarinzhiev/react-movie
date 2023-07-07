import React, {useContext, useEffect, useState} from 'react';
import './now.scss'
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";
import top from './Наверх.png'
import {animateScroll} from "react-scroll";
import {motion} from "framer-motion";


const Now = () => {
    const shakeVariants = {
        hover: {
            rotate:[0,8,-6,6,0],
            transition: {
                duration: 0.5,
            },
        },
    };
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
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
                        movies.slice(0,8).map((el)=>(
                            <div key={el.id} className='now__card'>
                                <Link to={`onemovie/${el.id}`}>
                                    <motion.div whileHover='hover' variants={shakeVariants}>
                                        <img src={el.image} alt=""/>
                                    </motion.div>

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
            <img className='totop' onClick={()=>toTop()} src={top} alt=""/>
        </section>
    );
};

export default Now;