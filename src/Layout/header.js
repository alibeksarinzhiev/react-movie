import React from 'react';
import './header.scss'
import headerlogo1 from './image/headerlogo.png'
import headerlogo2 from './image/headerlogo1.png'
import search from './image/Поиск.png'

const Header = () => {
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
                   <img src={search} alt=""/>
                   <button>Войти</button>
               </div>
           </div>

        </header>
    );
};

export default Header;