import apiClient from "../../Clients/apiClient";

class ProfileService {
  getProfile = (JWT) => apiClient(JWT).get("/auth/me");
}

export default new ProfileService();
