import React from 'react'
import bladshot from '../../img/bladshot.png'
import lets from '../../img/lets-go.png'
import people from '../../img/people.png'
import sonik from '../../img/sonik.png'
import men from '../../img/men.png'
import './cass.scss'
function Cass() {
  return (
    <section className='cassa'>
     <div className='cassa__container container'>
       <div className='cassa__title'>
        <div className='title__text'>
            <h2>Кассовые сборы</h2>
            <p>13 марта — 15 марта</p>
        </div>
        <ul className='title__ul'>
            <li>Россия</li>
            <li> Весь мир</li>
            <li>США и Канада</li>
        </ul>
       </div>
       <div className='cassa__cards'>
        <div className='cassa__card'>
           <img src= {bladshot}/>
           <div className='card__title'>
            <p className='p__one'>1. Бладшот</p>
            <p className='p__two'>$13 млн</p>
            <p className='p__thre'>$15.1 млн за 4 недели</p>
            </div> 
        </div>
        <div className='cassa__card'>
           <img src={lets}/>
           <div className='card__title'>
            <p className='p__one'>2. Вперёд</p>
            <p className='p__two'>$6.8 млн</p>
            <p className='p__thre'>$41.4 млн за 4 недели</p>
            </div> 
        </div>
        <div className='cassa__card'>
           <img src={people}/>
           <div className='card__title'>
            <p className='p__one'>3. Человек <br/>-невидимка</p>
            <p className='p__two'>$6.2 млн</p>
            <p className='p__thre'>$58.3 млн за 3 недели</p>
            </div> 
        </div>
        <div className='cassa__card'>
           <img src={sonik}/>
           <div className='card__title'>
            <p className='p__one'>4. Соник в кино</p>
            <p className='p__two'>$2.9 млн</p>
            <p className='p__thre'>$15.1 млн за 4 недели</p>
            </div> 
        </div>
        <div className='cassa__card'>
           <img src={men}/>
           <div className='card__title'>
            <p className='p__one'>5. Джентльмены</p>
            <p className='p__two'>$1.8 млн</p>
            <p className='p__thre'>$78.7 млн за 11 недель</p>
            </div> 
        </div>
       </div>
     </div>
    </section>
  )
}

export default Cass