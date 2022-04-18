import coursesService from "./courses.service";
import coursesAction from "./courses.action";

export const loadCoursesAsync = (JWT) => (dispatch) => {
  dispatch(coursesAction.coursesLoadStart());
  coursesService
    .getAllCourses(JWT)
    .then((response) =>
      dispatch(coursesAction.coursesLoadSuccess(response.data))
    )
    .catch((error) => dispatch(coursesAction.coursesLoadError(error.message)));
};
