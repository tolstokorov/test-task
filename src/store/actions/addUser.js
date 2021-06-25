import { UsersAPI } from "../../api";
import { getUsers } from "./getUsers";

const usersAPI = new UsersAPI();

const addUser = (options) => {
    return (dispatch) => {
        usersAPI.add(options)
        dispatch(getUsers);
    };
};

export {
    addUser
}