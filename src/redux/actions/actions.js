/*
 * action types
 */

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const TOGGLE_CART = 'TOGGLE_CART'



/*
 * action creators
 */

export const setUser = user => {
  return { type: SET_CURRENT_USER, payload: user }
}

export const toggleCart = () => { return { type: TOGGLE_CART }}

