import departmentsActionTypes from "./departments.actionTypes";
import departmentsInitialState from "./departments.initialState";

const departmentsReducer = (
  state = departmentsInitialState,
  action,
  payload
) => {
  switch (action.type) {
    case departmentsActionTypes.DEPARTMENTS_LOAD_START:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        departments: null,
        errorMessage: null,
      };

    case departmentsActionTypes.DEPARTMENTS_LOAD_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        departments: action.payload,
      });

    case departmentsActionTypes.DEPARTMENTS_LOAD_ERROR:
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

export default departmentsReducer;
