import usersActionTypes from "./users.actionTypes";
import usersInitialState from "./users.initialState";

const usersReducer = (state = usersInitialState, action, payload) => {
  switch (action.type) {
    case usersActionTypes.USERS_LOAD_START:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        users: null,
        errorMessage: null,
      };

    case usersActionTypes.USERS_LOAD_SUCCESS:
      console.log(action.payload);
      return state = {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case usersActionTypes.USERS_LOAD_ERROR:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
