import axios from "axios";

export default function fetchUsers() {
  return {
    type: "FETCH_USERS",
    promise: axios.get("http://localhost:5000/users"),
    payload: promise.then((response) => response.data),
  };
}
