import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext();
export const Context =(props)=>{

    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios('http://localhost:8080/movies')
            .then(({data})=>setMovies(data))
    },[])

    const value = {
        movies,
        setMovies
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>


}