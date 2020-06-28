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
// export const TOKEN_SIGNIN = 'TOKEN_SIGNIN'
// export const TOKEN_SIGNIN_SUCCESS = 'TOKEN_SIGNIN_SUCCESS'
// export const TOKEN_SIGNIN_FAIL = 'TOKEN_SIGNIN_FAIL'
export const SIGNIN = 'SIGNIN'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'

export const REGISTER = 'SIGNIN'
export const REGISTER_SUCCESS = 'SIGNIN_SUCCESS'
export const REGISTER_FAIL = 'SIGNIN_FAIL'
export const SIGNOUT = 'SIGNOUT'

/*
 * action creators
 */

// user actions -----------------
// export const setUser = (user) => {
//     return { type: SET_CURRENT_USER, payload: user }
// }

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
// export const tokenSignIn = () => {
//     return { type: TOKEN_SIGNIN }
// }
// export const tokenSignInSuccess = (user) => {
//     return { type: TOKEN_SIGNIN_SUCCESS, payload: user }
// }
// export const tokenSignInFail = (err) => {
//     return { type: TOKEN_SIGNIN_FAIL, payload: err }
// }
// export const asyncTokenSignIn = () => {
//     return async (dispatch) => {
//         dispatch(tokenSignIn())
//         const token = window.sessionStorage.getItem('token')
//         if (!token) return dispatch(tokenSignInFail())
        
//         try {
//             const response = await fetch(api + 'login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization": token
//                 },
//             })
//             if (!response.ok) {
//                 const errMsg = await response.text()
//                 throw new Error(errMsg)
//             }
//             const user = await response.json()
//             // console.log('sending to redux sccuess')
//             // console.log(user)
//             dispatch(signInSuccess(user))
//         } catch (err) {
//             dispatch(signInFail(err.message))
//         }
//     }
// }

export const signOut = () => {
    return  { type: SIGNOUT }
}

export const signIn = () => {
    return { type: SIGNIN }
}
export const signInSuccess = (user) => {
    return { type: SIGNIN_SUCCESS, payload: user }
}
export const signInFail = (err) => {
    return { type: SIGNIN_FAIL, payload: err }
}
export const asyncSignIn = (creds) => {
    return async (dispatch) => {
        dispatch(signIn())

        try {
            const response = await fetch(api + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(creds), // body data type must match "Content-Type" header
            })
            if (!response.ok) {
                const errMsg = await response.text()
                throw new Error(errMsg)
            }
            const user = await response.json()
            // console.log('sending to redux sccuess')
            // console.log(user)
            dispatch(signInSuccess(user))
        } catch (err) {
            dispatch(signInFail(err.message))
        }
    }
}

export const register = () => {
    return { type: REGISTER }
}
export const registerSuccess = (user) => {
    return { type: REGISTER_SUCCESS, payload: user }
}
export const registerFail = (err) => {
    return { type: REGISTER_FAIL, payload: err }
}
export const asyncRegister = (creds) => {
    return async (dispatch) => {
        dispatch(register())

        try {
            const response = await fetch(api + 'register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(creds), // body data type must match "Content-Type" header
            })
            if (!response.ok) {
                const errMsg = await response.text()
                throw new Error(errMsg)
            }
            const user = await response.json()
            dispatch(registerSuccess(user))
        } catch (err) {
            dispatch(registerFail(err.message))
        }
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
    return (dispatch) => {
        // dispatch will be provided by thunk when this action creator is called
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
