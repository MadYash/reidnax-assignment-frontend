import axios from "axios"

export const getAnalytics = async (callback) => {
  try {
    await axios
      .get("http://localhost:8000/analytics")
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};
