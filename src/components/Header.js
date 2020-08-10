import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [hidden, setHidden] = useState(true);
    const [ikon, setIcon] = useState('fas fa-bars')
    const handleShowMenu = () => {
        const ul = document.querySelector('.header__menu');
        setHidden(!hidden)
        if (hidden) {
            ul.classList.remove('header__menu--hidden');
            setIcon('fas fa-times')
        }
        else {
            ul.classList.add('header__menu--hidden')
            setIcon('fas fa-bars')
        }
    }
    return (
        <>
            <h1 className='header__logo'>My motivation</h1>
            <button className="header__hamburger" onClick={handleShowMenu}><i className={ikon}></i></button>
            <nav className='header__menu header__menu--hidden'>
                <ul className="header__menuList">
                    <li className='header__item'><NavLink to='/quotes-application/' exact >Home</NavLink></li>
                    <li className='header__item'><NavLink to='/quotes-application/start' >Start</NavLink></li>
                    <li className='header__item'><NavLink to='/quotes-application/login' >Login</NavLink></li>
                    <li className='header__item'><NavLink to='/quotes-application/contact' >Contact</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;