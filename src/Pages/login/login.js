import React from 'react'
import './login.scss'
import wk from './icon/wk.svg'
import f from './icon/f.svg'
import g from './icon/g.svg'
import tw from './icon/tw.svg'
import eye from './icon/eye-solid.svg'
function Login() {
 
  return (
    <section className='login'>
        <div className='login__container container'>
            <p className='p'>x</p>
            <h2 className='login__h2'>Войти</h2>
            <input  type='text' className='login__input__one' placeholder='Логин, почта или телефон'/>
            <input type='password' className='login__input__one' placeholder='Ваш пароль'/>
            <button className='login__btn__one'> Войти </button>
            <button className='login__btn__two'> Зарегистрироваться </button>
            <a href='' className='login__a'>Восстановить пароль</a>
            <div className='login__icons'>
                <div className='icon'>
                   <img src={wk}/>
                </div>
             <div className='icon'>
                   <img src={f}/>    
                    </div>
             <div className='icon'>
             <img src={g}/>
                    </div>
             <div className='icon'>
             <img src={tw}/>  
                    </div>
            </div>
            <img className='eye' src={eye}/>
        </div>
    </section>
  )
}

export default Login