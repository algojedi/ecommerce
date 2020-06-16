import React from 'react'
import CustomButton from '../custom-btn/custom-btn';
import "./cart-dropdown.scss"

function CartDropdown() {
    return (
        <div className="cart-dropdown">
        <div className="cart-dropdown_items">
        </div>
        <div className='cart-dropdown_btn'>
        <CustomButton>Checkout</CustomButton>
        </div>
            
        </div>
    )
}

export default CartDropdown
