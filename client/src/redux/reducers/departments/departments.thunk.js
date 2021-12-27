import departmentsService from "./departments.service";
import departmentsAction from "./departments.action";

export const loadDepartmentsAsync = () => (dispatch) => {
  dispatch(departmentsAction.departmentsLoadStart());
  departmentsService
    .getAllDepartments()
    .then((response) =>
      dispatch(departmentsAction.departmentsLoadSuccess(response.data))
    )
    .catch((error) =>
      dispatch(departmentsAction.departmentsLoadError(error.message))
    );
};
