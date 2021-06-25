import { UsersAPI } from "../../api";
import { getUsers } from "./getUsers";

const usersAPI = new UsersAPI();

const deleteUser = (id) => {
    return (dispatch) => {
        usersAPI.delete(id)
        dispatch(getUsers);
    };
};

export {
    deleteUser
}