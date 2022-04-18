import assignmentsActionTypes from "./assignments.actionTypes";

const assignmentsLoadStart = () => ({
  type: assignmentsActionTypes.ASSIGNMENTS_LOAD_START,
});

const assignmentsLoadSuccess = (assignments) => ({
  type: assignmentsActionTypes.ASSIGNMENTS_LOAD_SUCCESS,
  payload: assignments,
});

const assignmentsLoadError = (errorMessage) => ({
  type: assignmentsActionTypes.ASSIGNMENTS_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  assignmentsLoadError,
  assignmentsLoadStart,
  assignmentsLoadSuccess,
};
