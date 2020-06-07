import React from 'react'
import './nav.scss'
import { MdDehaze } from 'react-icons/md'
// , size: '3rem'
import { IconContext } from 'react-icons'
function Nav() {
    return (
        <IconContext.Provider value={{ className: 'nav-icons-provider' }}>
            <div className='navbar'>
                <MdDehaze className='navbar_burger' />
                <h1 className='navbar_title'>The Clothing Store</h1>
                <div className='navbar_cart'>Cart?</div>
            </div>
            <ul className='navbar_links'>
                <li className='navbar_links_link'>MEN</li>
                <li className='navbar_links_link'>WOMEN</li>
                <li className='navbar_links_link'>HATS</li>
                <li className='navbar_links_link'>SALE</li>
            </ul>
        </IconContext.Provider>
    )
}

export default Nav
