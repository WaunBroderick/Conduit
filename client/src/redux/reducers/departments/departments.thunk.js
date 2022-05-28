import departmentsService from "./departments.service";
import departmentsAction from "./departments.action";

export const loadDepartmentsAsync = (data) => (dispatch) => {
  dispatch(departmentsAction.departmentsLoadStart());
  dispatch(departmentsAction.departmentsLoadSuccess(data));
};
