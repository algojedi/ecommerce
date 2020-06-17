import React from 'react'
import CustomButton from '../custom-btn/custom-btn';
import "./cart-dropdown.scss"
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/selectors/cart.selectors';

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
        <div className="cart-dropdown_items">
         {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
        </div>
        <div className='cart-dropdown_btn'>
        <CustomButton>Checkout</CustomButton>
        </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
