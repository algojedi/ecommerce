import React from 'react'
// import { ReactComponent as ShoppingCart } from '../../assets/cart.svg'
import './cart-icon.scss'

// <ShoppingCart className="cart-icon_cart" />

import {BsBag } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { toggleCart } from '../../redux/actions/actions'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors'

function CartIcon( { itemCount, dispatch }) {
    return (
        <IconContext.Provider value={{ className: 'nav-icons_provider' }}>
        <div className="cart-icon" onClick = { () => dispatch(toggleCart()) }>
        <BsBag className="cart-icon_cart" size="26px"/>
        <span className="cart-icon_count">{itemCount}</span>
            
        </div>
        
        </IconContext.Provider>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps)(CartIcon)
