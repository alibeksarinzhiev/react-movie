import React from 'react'
import './topMovie.scss'
import img from './Img.png'
import logo from '../../Layout/image/headerlogo.png'
function TopMovie() {
  return (
    <section className='topMovie'>
        <div className='topMovie__container container'>
            <div className='topMovie__box'>
                <h1>Подборки фильмов</h1>
                <p className='p'>Главная <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 4.38304L1.05501 8" stroke="#4F5B7C" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> <span>Подборки</span></p>
                <p className='topMovie__title'>Также как дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает <br/> внедрение первоочередных требований. Современные технологии достигли такого уровня, что внедрение<br/>  современных методик предполагает независимые способы реализации стандартных подходов. Сторонники <br/>  тоталитаризма в науке могут быть объявлены нарушающими общечеловеческие нормы этики и морали.</p>
                <ul className='topMovie__ul'>
                    <li>  Kinoarea </li>
                    <li>  Сериалы  </li>
                    <li>  Направления </li>
                    <li>  Критика  </li>
                    <li>  Сборы </li>
                    <li>  Премии </li>
                    <li> Годы </li>
                    <li>  Жанры </li>
                </ul>
                <div className='topMovie__cards'>
                  <div className='topMovie__card'>
                     <div className='card__img'>
                      <img src={img} className='img'/>
                      <h2 className='card__h2'>ТОП <span className='span'>250</span> <br/> ФИЛЬМОВ</h2>
                      <img src={logo} className='logo'/>
                      <div className='card__title'>
                      <h3 className='card__tite_h3'>ТОП 250 лучших фильмов</h3>
                      <p className='card__title_p'>250 фильмов</p>
                     </div>
                     </div>
                     <button className='card__btn'>Посмотреть</button>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopMovie