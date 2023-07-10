import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './onemovie.scss'

const OneMovie = () => {

    const { id } = useParams()
    const [one,setOne] = useState([])
    const [color,setColor] = useState(0)
    const [color2,setColor2] = useState(0)
    // 360 = 100%
    //     360 = 10
    // 50% = 180
    // 5 = 180




    useEffect(()=>{
        axios(`http://localhost:8080/movies/${id}`)
            .then(({data})=>setOne(data))
        axios(`http://localhost:8080/movies/${id}`)
            .then(({data})=>setColor2(data.rate))
        axios(`http://localhost:8080/movies/${id}`)
            .then(({data})=>setColor(data.rateWait))


    },[])

    let style = {
        // width = color *36
    }


    return (
        <section className='oneMovie'>
            <div className="oneMove__container container">
                <img src={`../../${one.image === undefined ?'': one.image}`} alt=""/>
                <h2>{one.title}</h2>
                <p>{one.desc}</p>
                <h2>{one.id}</h2>
                <ul>
                    <li className='ratewait'>{one.rateWait}</li>
                    <li  className='rate'>{one.rate}</li>
                </ul>

            </div>
        </section>
    );
};

export default OneMovie;