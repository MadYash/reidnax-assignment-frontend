import axios from "axios";

export const login = async (data, callback) => {
  try {
    await axios
      .post("http://localhost:8000/login", data)
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};
