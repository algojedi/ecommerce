/*
import { UPDATE_COLLECTIONS_SUCCESS } from './actions';
 * action types
 */

import { api } from '../../api/api'
import { collectionMapping } from '../reducers/shop/shop.utils'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const TOGGLE_CART = 'TOGGLE_CART'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'
export const UPDATE_COLLECTIONS_SUCCESS = 'UPDATE_COLLECTIONS_SUCCESS'
export const UPDATE_COLLECTIONS_FAIL = 'UPDATE_COLLECTIONS_FAIL'
export const TOKEN_SIGNIN = 'TOKEN_SIGNIN'
export const TOKEN_SIGNIN_SUCCESS = 'TOKEN_SIGNIN_SUCCESS'
export const TOKEN_SIGNIN_FAIL = 'TOKEN_SIGNIN_FAIL'

/*
 * action creators
 */

// user actions -----------------
export const setUser = (user) => {
    return { type: SET_CURRENT_USER, payload: user }
}

// cart actions -----------------
export const toggleCart = () => {
    return { type: TOGGLE_CART }
}

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

// sign in actions -------------------
export const tokenSignIn = () => {
    return { type: TOKEN_SIGNIN }
}
export const tokenSignInSuccess = (user) => {
    return { type: TOKEN_SIGNIN_SUCCESS, payload: user }
}
export const tokenSignInFail = (err) => {
    return { type: TOKEN_SIGNIN_FAIL, payload: err }
}
export const asyncTokenSignIn = () => {
    return dispatch => {
        dispatch(tokenSignIn())
        fetch(api + 'login')
        .then(results => results.json())
        .then(user => dispatch(tokenSignInSuccess(user)))
        .catch(err => dispatch(tokenSignInFail(err)))
    }
}

// collection actions -----------------
export const fetchCollections = () => {
    return { type: UPDATE_COLLECTIONS }
}

export const fetchCollectionsSuccess = (collections) => {
    return { type: UPDATE_COLLECTIONS_SUCCESS, payload: collections }
}

export const fetchCollectionsFail = (err) => {
    return { type: UPDATE_COLLECTIONS_FAIL, payload: err }
}

// thunk action that return fn ---------------
export const asyncFetchCollections = () => {
    return (dispatch) => { // dispatch will be provided by thunk when this action creator is called
        // do the async fetching
        dispatch(fetchCollections())
        fetch(api + 'products')
            .then((results) => results.json())
            .then((collection) => {
                const convertedCollection = collectionMapping(collection)
                dispatch(fetchCollectionsSuccess(convertedCollection))

                // console.log(convertedCollection)
                // dispatch(updateCollections(convertedCollection))
            })
            .catch((err) => {
                console.log(err.message)
                dispatch(fetchCollectionsFail(err.message))
            })
    }
}
