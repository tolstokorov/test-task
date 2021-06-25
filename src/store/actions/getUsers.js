import { UsersAPI } from "../../api";

const GET_USERS_STARTED = 'ADMIN/GET_USERS_STARTED';
const GET_USERS_SUCCESS = 'ADMIN/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'ADMIN/GET_USERS_FAILURE';

const getUsersStarted = () => ({ type: GET_USERS_STARTED });
const getUsersSuccess = (data) => ({ type: GET_USERS_SUCCESS, payload: data });
const getUsersFailure = () => ({ type: GET_USERS_FAILURE });

const usersAPI = new UsersAPI();

const getUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStarted);
        const data = await usersAPI.getAll();
        if(data) {
            dispatch(getUsersSuccess(data));
        } else {
            dispatch(getUsersFailure());
        }

    };
};

export {
    GET_USERS_STARTED,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,

    getUsers
}