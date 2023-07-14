import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import "./trailer.scss"
import fastandfurios from './fastandfurios.png'
import sharefilm from './sharefilm.png'
import mark from './mark.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Trailer = () => {
    const {movies} = useContext(CustomContext)
    return (
        <section className='trailer'>
            <div className="trailer__container container">
                <h2>Новые трейлеры</h2>
                <h2>Все трейлеры</h2>
                <img src={fastandfurios} className='trailer__img' alt=""/>
                <div className='trailer__bottom'>
                <h2 className='trailer__name'>Форсаж 9</h2>
                <img className='trailer__share' src={sharefilm} alt=""/>
                <img className='trailer__mark' src={mark} alt=""/>
                </div>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    Autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {movies.map((el)=>(
                        <SwiperSlide>
                        <div key={el.id} className='trailer__card'>
                            <img src={el.image} alt=""/>
                            <h3>{el.title}</h3>
                        </div>
                        </SwiperSlide>
                    ))}



                </Swiper>

            </div>
        </section>
    );
};

export default Trailer;