import React from 'react';
import "./register.scss"
import Galka from './image/Vector 1.svg'

const Register = () => {
    return (
        <section className='register'>
            <div className="register__container container">
                <form className="register__farm" action="">
            <h1>Зарегистрироваться</h1>
            <input placeholder="Имя" type="text"/>
            <input placeholder="Фамилия" type="text"/>
            <input placeholder="Придумайте логин" type="text"/>
            <input placeholder="Придумайте пороль" type="text"/>
            <input placeholder="Повторите пороль" type="text"/>
            <input placeholder="Номер телефона или e-mail" type="text"/>
                    <div className="agree_reg_1">
                        <div>
                            <img src={Galka} alt=""/>
                        </div>
                        <p>Соглашаюсь на условия </p>
                        <p className="yell_p_reg">  политики конфиденциальности</p>
                    </div>
                    <div className="agree_reg_2">
                        <div>
                            <img src={Galka} alt=""/>
                        </div>
                        <p>Соглашаюсь на обработку </p>
                    </div>
                    <button className="button_reg">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Register;