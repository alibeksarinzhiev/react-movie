import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {animateScroll} from "react-scroll";

const Search = () => {

    const{movies,setMovies,inputValue, setInputValue} = useContext(CustomContext)

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
    return (
        <section className='search'>
            <div className="search__container container">
                <h1>Результаты поиска</h1>

                    {
                       inputValue.length >0?movies.filter((el)=>(
                           el.title.toLowerCase().includes(inputValue.toLowerCase()))).map((el)=>(
                           <div key={el.id} className='now__card'>
                               <Link onClick={()=>toTop()} to={`onemovie/${el.id}`} >
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
                       )): movies.map((el)=>(
                           <div key={el.id} className='now__card'>
                               <Link onClick={()=>toTop()} to={`onemovie/${el.id}`} >
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
        </section>
    );
};

export default Search;