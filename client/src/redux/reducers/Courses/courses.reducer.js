import coursesActionTypes from "./courses.actionTypes";
import coursesInitialState from "./courses.initialState";

const coursesReducer = (state = coursesInitialState, action, payload) => {
  switch (action.type) {
    case coursesActionTypes.COURSES_LOAD_START:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        courses: null,
        errorMessage: null,
      };

    case coursesActionTypes.COURSES_LOAD_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        courses: action.payload,
      });

    case coursesActionTypes.COURSES_LOAD_ERROR:
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

export default coursesReducer;
