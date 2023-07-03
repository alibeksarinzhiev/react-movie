import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const OneMovie = () => {

    const { id } = useParams()
    const [one,setOne] = useState([])

    useEffect(()=>{
        axios(`http://localhost:8080/movies/${id}`)
            .then(({data})=>setOne(data))
    },[])
    console.log(id)

    return (
        <section className='oneMovie'>
            <div className="oneMove__container container">
                <img src={`../${one.image === undefined ?'': one.image}`} alt=""/>
                <h2>{one.title}</h2>
                <p>{one.desc}</p>
                <h2>{one.id}</h2>

            </div>
        </section>
    );
};

export default OneMovie;