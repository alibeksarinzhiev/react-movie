import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import "./trailer.scss"
import fastandfurios from './fastandfurios.png'

const Trailer = () => {
    const {movies} = useContext(CustomContext)
    return (
        <section className='trailer'>
            <div className="trailer__container container">
                <h2>Новые трейлеры</h2>
                <h2>Все трейлеры</h2>
                {/*<img src={fastandfurios} alt=""/>*/}
                <div className="trailer__box">
                    {movies.map((el)=>(
                        <div key={el.id} className='trailer__card'>
                            <img src={el.image} alt=""/>
                            <h3>{el.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trailer;