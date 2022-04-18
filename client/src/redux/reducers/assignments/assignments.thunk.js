import assignmentsService from "./assignments.service";
import assignmentsAction from "./assignments.action";

export const loadAssignmentsAsync = (JWT) => (dispatch) => {
  dispatch(assignmentsAction.assignmentsLoadStart());
  assignmentsService
    .getAllAssignments(JWT)
    .then((response) =>
      dispatch(assignmentsAction.assignmentsLoadSuccess(response.data))
    )
    .catch((error) =>
      dispatch(assignmentsAction.assignmentsLoadError(error.message))
    );
};
