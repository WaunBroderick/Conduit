import assignmentsService from "./assignments.service";
import assignmentsAction from "./assignments.action";

export const loadAssignmentsAsync = (data) => (dispatch) => {
  dispatch(assignmentsAction.assignmentsLoadStart());
  dispatch(assignmentsAction.assignmentsLoadSuccess(data));
};
