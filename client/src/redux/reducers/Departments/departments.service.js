import apiClient from "../../Clients/apiClient";

class DepartmentsService {
  getAllDepartments = () => apiClient().get("departments");
}

export default new DepartmentsService();
