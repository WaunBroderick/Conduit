import UsersService from "./users.service";
import UsersAction from "./users.action";
import { useDispatch } from "react-redux";

export const loadUsersAsync = (data) => (dispatch) => {
  dispatch(UsersAction.usersLoadStart());
  dispatch(UsersAction.usersLoadSuccess(data));
};
