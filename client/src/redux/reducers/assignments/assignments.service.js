import apiClient from "../../Clients/apiClient";

class AssignmentsService {
  getAllAssignments = (JWT) => apiClient(JWT).get("assignment");
  getUsersAssignments = (JWT) => apiClient(JWT).get("assignment/");
}

export default new AssignmentsService();
