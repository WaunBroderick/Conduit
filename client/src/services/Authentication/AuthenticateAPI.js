const axios = require("axios");

export default function loginUser(email, password) {
  const user = {
    username: email,
    password: password,
  };

  console.log(user);
  console.log("hello");

  return function () {
    console.log("entered");
    return axios
      .post(
        "http://localhost:5000/auth/signin",
        {
          username: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
}
