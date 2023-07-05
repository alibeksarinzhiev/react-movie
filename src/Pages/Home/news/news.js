import React from 'react'
import news1 from '../../img/news1.png'
import news2 from '../../img/news2.png'
import news3 from '../../img/news3.png'
import news4 from '../../img/news4.png'
import news5 from '../../img/news5.png'
import './news.scss'
const News = () => {
  return (
    <section className='news'>
        <div className='news__container container'>
            <div className='news__title'>
                <h3>Последние новости</h3>
                <p>Все новости</p>
            </div>
            <div className='news__cards cards'>
                <img src={news1}  className='new1'/>
              <div className='card'>
              <img src={news2} />
              <img src={news3} />
              <img src={news4} />
              <img src={news5} />
              </div>
            </div>
            </div> 
    </section>
  )
}

export default News