import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

// used to populate cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

// used to display total items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity,
            0
        )
)
