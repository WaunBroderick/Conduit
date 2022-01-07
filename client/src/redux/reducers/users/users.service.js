import apiClient from "../../Clients/apiClient";

class UsersService {
  getAllUsers = (JWT) => apiClient(JWT).get("users");
}

export default new UsersService();
