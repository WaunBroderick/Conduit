import usersService from "./users.service";
import usersAction from "./users.action";
import { useDispatch } from "react-redux";

export const loadUsersAsync = () => (dispatch) => {
  dispatch(usersAction.usersLoadStart());
  usersService
    .getAllUsers()
    .then((response) => dispatch(usersAction.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(usersAction.usersLoadError(error.message)));
};
