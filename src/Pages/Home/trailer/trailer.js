import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

const Trailer = () => {
    const {movies} = useContext(CustomContext)
    return (
        <section className='trailer'>
            <div className="trailer__container container">
                <h2>Новые трейлеры</h2>
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