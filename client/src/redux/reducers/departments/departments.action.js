import departmentsActionTypes from "./departments.actionTypes";

const departmentsLoadStart = () => ({
  type: departmentsActionTypes.DEPARTMENTS_LOAD_START,
});

const departmentsLoadSuccess = (departments) => ({
  type: departmentsActionTypes.DEPARTMENTS_LOAD_SUCCESS,
  payload: departments,
});

const departmentsLoadError = (errorMessage) => ({
  type: departmentsActionTypes.DEPARTMENTS_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  departmentsLoadError,
  departmentsLoadStart,
  departmentsLoadSuccess,
};
