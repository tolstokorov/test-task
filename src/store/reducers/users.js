import { GET_USERS_FAILURE, GET_USERS_STARTED, GET_USERS_SUCCESS } from "../actions/getUsers";

const initialState = {
    usersData: [],
    loading: true,
    hasError: false
}

const users = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case GET_USERS_STARTED:
            return {
                ...state,
                loading: true,
                hasError: false
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                usersData: rest.payload,
                loading: false,
                hasError: false
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true
            }
        default:
            return state
    }
}

export default users;