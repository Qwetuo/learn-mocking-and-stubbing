const fetchData = require("./utils");

class App {
  async getData() {
    const data = await fetchData();
    return data;
  }
}

module.exports = App;
