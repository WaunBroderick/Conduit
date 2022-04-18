import assignmentsActionTypes from "./assignments.actionTypes";
import assignmentsInitialState from "./assignments.initialState";

const assignmentsReducer = (
  state = assignmentsInitialState,
  action,
  payload
) => {
  switch (action.type) {
    case assignmentsActionTypes.ASSIGNMENTS_LOAD_START:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        assignments: null,
        errorMessage: null,
      };

    case assignmentsActionTypes.ASSIGNMENTS_LOAD_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        assignments: action.payload,
      });

    case assignmentsActionTypes.ASSIGNMENTS_LOAD_ERROR:
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

export default assignmentsReducer;
