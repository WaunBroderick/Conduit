import profileActionTypes from "./profile.actionTypes";
import profileInitialState from "./profile.initialState";

const profileReducer = (state = profileInitialState, action, payload) => {
  switch (action.type) {
    case profileActionTypes.PROFILE_LOAD_START:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        profile: null,
        errorMessage: null,
      };

    case profileActionTypes.PROFILE_LOAD_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        profile: action.payload,
      });

    case profileActionTypes.PROFILE_LOAD_ERROR:
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

export default profileReducer;
