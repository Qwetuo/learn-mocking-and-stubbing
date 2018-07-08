const axios = require("axios");

const fetchData = async () => {
  const URL = "https://carparks-sg.herokuapp.com/api";
  console.log("actually fetching data");
  const response = await axios.get(URL);
  return response.data;
};

module.exports = fetchData;
