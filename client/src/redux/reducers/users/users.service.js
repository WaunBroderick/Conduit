import apiClient from "../../Clients/apiClient";

class UsersService {
  getAllUsers = () => apiClient().get("users");
}

export default new UsersService();
