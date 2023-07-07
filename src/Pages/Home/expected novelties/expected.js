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
                {movies.reverse().slice(0,2).map((el)=>
                <div className='card'>
                    <img src={el.image} />
                </div>
                
                )}
            </div>

        </div>
    </section>
   
  )
}

export default Expected