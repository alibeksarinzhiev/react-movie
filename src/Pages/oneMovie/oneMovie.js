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
            <div className="oneMovie__container container">
                <div className="oneMovie__left"> <img src={`../../${one.image === undefined ?'': one.image}`} alt=""/></div>
                <div className="oneMovie__right">
                    <h2>{one.title}</h2>
                    <p className="oneMovie__right-p">Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.</p>
                    <ul>
                        <li className='ratewait'>{one.rateWait}</li>
                        <li  className='rate'>{one.rate}</li>
                    </ul>
                    <button className="oneMovie__right-btn">
                        Смотреть трейлер
                    </button>
                </div>
            </div>
        </section>
    );
};
// <h2>{one.title}</h2>
// <p>{one.desc}</p>
// <h2>{one.id}</h2>

export default OneMovie;