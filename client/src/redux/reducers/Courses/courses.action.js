import coursesActionTypes from "./courses.actionTypes";

const coursesLoadStart = () => ({
  type: coursesActionTypes.COURSES_LOAD_START,
});

const coursesLoadSuccess = (courses) => ({
  type: coursesActionTypes.COURSES_LOAD_SUCCESS,
  payload: courses,
});

const coursesLoadError = (errorMessage) => ({
  type: coursesActionTypes.COURSES_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  coursesLoadError,
  coursesLoadStart,
  coursesLoadSuccess,
};
