import React, { useContext } from 'react'
import './expected.scss'
import { CustomContext } from '../../../Context'

const Expected = () => {
    const {movies}=useContext(CustomContext)
  return (
    <section className='expecred'>
        <div className='expecred__container container'>
            <div className='expecred__title'>
                <p className='title__p'>Ожидаемые новинки</p>
            </div>
            <div className='expecred__cards'>
                {movies.slice(3,7).reverse().map((el)=>
                <div className='expecred__card'>
                    <img src={el.image} />
                    <h4>{el.title}</h4>
                    <p>{el.country}</p>
                    <p>{el.year}</p>
                </div>
                
                )}
            </div>

        </div>
    </section>
   
  )
}

export default Expected