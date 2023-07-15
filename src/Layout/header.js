import React, {useState,useContext} from 'react';
import './header.scss'
import headerlogo1 from './image/headerlogo.png'
import headerlogo2 from './image/headerlogo1.png'
import search from './image/Поиск.png'
import {Link, useNavigate} from "react-router-dom";

import {CustomContext} from "../Context";

const Header = () => {
    const [inputSearch, setInputSearch] = useState(false)
    const{setInputValue} = useContext(CustomContext)

    const navigate = useNavigate()



    return (
        <header className='header'>
           <div className="header__container container">
               <div className="header__title">
                   <img src={headerlogo1} alt=""/>
                   <img src={headerlogo2} alt=""/>
               </div>
               <div className="header__lists" >
                   <li>Афиша</li>
                   <li>Медиа </li>
                   <li>Фильмы</li>
                   <li>Актеры</li>
                   <li>Новости</li>
                   <li>Подборки</li>
                   <li>Категории</li>
               </div>
               <div className="header__auth">



                   {inputSearch===false?'': <input onChange={(e)=>setInputValue(e.target.value)} typeof='search' className='header__search' type="text"/>}
                   <Link to='/search'>
                   <img onClick={()=>setInputSearch(!inputSearch)} src={search} alt=""/>
                    </Link>
                   <button>Войти</button>

               </div>
           </div>

        </header>
    );
};

export default Header;