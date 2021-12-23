import apiClient from "../../redux/actions/apiClient";

class UsersService {
  getAllUsers = () => apiClient().get("users");
}

export default new UsersService();
