import axios from "axios";

export default async function hander(req, res) {
  const name = req.body.name;
  const email = req.body.email;

  const data = JSON.stringify({
    fields: {
      Name: name,
      Email: email,
    },
  });
  const config = {
    Authorization: `Bearer ${process.en}`
  }
}
