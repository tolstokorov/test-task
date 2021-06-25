import { UsersAPI } from "../../api";
import { getUsers } from "./getUsers";

const usersAPI = new UsersAPI();

const editUser = (id, options) => {
    return (dispatch) => {
        usersAPI.edit(id, options)
        dispatch(getUsers);
    };
};

export {
    editUser
}