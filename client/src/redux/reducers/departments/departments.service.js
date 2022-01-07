import apiClient from "../../Clients/apiClient";

class DepartmentsService {
  getAllDepartments = (JWT) => apiClient(JWT).get("departments");
}

export default new DepartmentsService();
