import React from 'react';
import './footer.scss'
import image from './image/images.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__form'>
                    <img src={image} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;