const axios = require("axios");

export default async function createUser(name, email, organization, password) {
  const post = await axios
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

  console.log("Made it to the end");
}
