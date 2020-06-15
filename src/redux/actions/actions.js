/*
 * action types
 */

export const SET_CURRENT_USER = 'SET_CURRENT_USER'




/*
 * action creators
 */

export const setUser = user => {
  return { type: SET_CURRENT_USER, payload: user }
}