const axios = require("axios");

export default function createUserAccount(name, email, organization, password) {
  console.log("Made it to creat user function");
  const post = axios
    .post(
      "http://localhost:5000/users",
      {
        name: name,
        email: email,
        organization: organization,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(response.data);
    });
}
