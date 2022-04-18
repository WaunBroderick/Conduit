import apiClient from "../../Clients/apiClient";

class CoursesService {
  getAllCourses = (JWT) => apiClient(JWT).get("courses");
}

export default new CoursessService();
