const App = require("./App");

// TODO: mock paymentService module
// TODO: create a mock function for each function in paymentService module

test.skip("App tests shouldn't make actual calls to paymentService", () => {
  const queue = [1, 2, 3, 10];
  const app = new App(queue);

  app.start();

  expect(queue).toHaveLength(0);
});
