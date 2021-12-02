const axios = require("axios");

export default function loginUser(email, password) {
  console.log("sure");
  return function () {
    return axios
      .post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("made it to the validation portion");
      });
  };
}
