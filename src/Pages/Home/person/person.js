import React from 'react'
import jason from '../../img/Jason Statham.png'
import quentin from '../../img/Quentin Tarantino.png'
import list from '../../img/List.png'
import './person.scss'
const Person = () => {
  return (
    <section className='persons'>
        <div className='persons__container container'>
            <div className='persons__title'>
                <p>Популярные персоны</p>
                <ul className='persons__ul'>
                    <li >За год</li>
                    <li >За месяц</li>
                    <li> За неделю</li>
                </ul>
            </div>
            <div className='persons__cards'>
                <img src={quentin} className='quentin.img' />
                <img src={jason} className='jason.img' />
                <img src={list} className='list.img' />
            </div>
        </div>
    </section>
  )
}

export default Person