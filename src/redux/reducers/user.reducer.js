import {
    SET_CURRENT_USER,
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    REGISTER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    SIGNOUT,
} from '../actions/actions'

const INITIAL_STATE = { currentUser: null, isLoading: false, errorMsg: '' }

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNOUT:
            return INITIAL_STATE

        case SIGNIN:
            return { ...state, isLoading: true, errorMsg: '' }

        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                errorMsg: '',
            }

        case SIGNIN_FAIL:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMsg: action.payload,
            }

        case REGISTER:
            return { ...state, isLoading: true, errorMsg: '' }

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                errorMsg: '',
            }

        case REGISTER_FAIL:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMsg: action.payload,
            }

        // case TOKEN_SIGNIN:
        //     return { ...state, isLoading: true }

        // case TOKEN_SIGNIN_SUCCESS:
        //     return { ...state, isLoading: false, currentUser: action.payload }

        // case TOKEN_SIGNIN_FAIL:
        //     return { ...state, isLoading: false }

        default:
            return state
    }
}

export default userReducer
