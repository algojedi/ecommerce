/*
 * action types
 */

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const TOGGLE_CART = 'TOGGLE_CART'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'

/*
 * action creators
 */

// user actions -----------------
export const setUser = user => {
  return { type: SET_CURRENT_USER, payload: user }
}


// cart actions -----------------
export const toggleCart = () => { return { type: TOGGLE_CART }}

export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item }
}

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
})

export const clearItemFromCart = (item) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
})