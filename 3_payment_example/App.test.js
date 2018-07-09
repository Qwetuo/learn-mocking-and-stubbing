const App = require("./App");

// TODO: mock paymentService module
const {makePayment, refundPayment} = require("./paymentService")


// TODO: create a mock function for each function in paymentService module
jest.mock("./paymentService.js", () => {
  return {
    makePayment: jest.fn(),
    refundPayment: jest.fn()
  }
})

test("App tests shouldn't make actual calls to paymentService", () => {
  const queue = [1, 2, 3, 10];
  const app = new App(queue);

  app.start();

  expect(queue).toHaveLength(0);
  expect(makePayment).toHaveBeenCalledTimes(4);
  expect(refundPayment).toHaveBeenCalledTimes(4)
});
