import departmentsService from "./departments.service";
import departmentsAction from "./departments.action";

export const loadDepartmentsAsync = (JWT) => (dispatch) => {
  dispatch(departmentsAction.departmentsLoadStart());
  departmentsService
    .getAllDepartments(JWT)
    .then((response) =>
      dispatch(departmentsAction.departmentsLoadSuccess(response.data))
    )
    .catch((error) =>
      dispatch(departmentsAction.departmentsLoadError(error.message))
    );
};
