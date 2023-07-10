import React from 'react';
import './footer.scss'
import image from './image/images.png'
import icon from './image/cinema 1.svg'
import icons from './image/headerlogo1.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__relative'>
                <div className='footer__form'>
                    <img src={image} className='footer__img' />
                </div>
                <div className='footer__box'>
                    <div className='footer__icon'>
                      <img src={icon} className='icon'/>
                      <h3 className='icon__h3'>Kinoarea</h3>
                    </div>
                    <h2 className='box__h2'>Подпишитесь на E-mail рассылку</h2>
                    <p className='box__p'>Если хотиет быть в курсе последних новостей и новинок кино -
                    <br/> заполните форму ниже и оформите бесплатную E-mail рассылку! </p>
                    <div className='box__form'>
                        <input className='box__input' placeholder='Введите свой E-mail адрес'/>
                        <button className='box__btn'>Подписаться</button>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes"/>
                    <p className='checkbox__p'>Соглашаюсь на условия <span className='span'>политики конфиденциальности</span> </p>
                    </div>
                </div>
                </div>
                <div className='footer__bottom'>
                   <img src={icons} className='icons'/>
                   <ul className='fooret__ul'>
                    <li>Афиша </li>
                    <li>Новости</li>
                    <li>Персоны</li>
                    <li>Рейтинги</li>
                    <li>Рецензии</li>
                    <li>Каталог фильмов</li>
                   </ul>
                   <p className='bottom__p'>2020 © Kinoarea.  Все права защищены</p>
                   <p className='bottom__p'>Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;