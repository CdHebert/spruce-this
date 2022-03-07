import React from 'react';
import Logo from './logo.svg'
import './style.css'
const Header = () => {

    return (
        <div className='svg-header'>
            <img src={Logo} alt='spruce logo' />
        </div>
    )
}

export default Header;