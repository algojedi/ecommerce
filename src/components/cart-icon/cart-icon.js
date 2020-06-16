import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/cart.svg'
import './cart-icon.scss'

// <ShoppingCart className="cart-icon_cart" />

import {BsBag } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { toggleCart } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

function CartIcon() {
    const dispatch = useDispatch()
    return (
        <IconContext.Provider value={{ className: 'nav-icons_provider' }}>
        <div className="cart-icon" onClick = { () => dispatch(toggleCart()) }>
        <BsBag className="cart-icon_cart" size="26px"/>
        <span className="cart-icon_count">0</span>
            
        </div>
        
        </IconContext.Provider>
    )
}

export default CartIcon
