const App = require("./App")
const fetchData = require("./utils")
jest.mock("./utils.js", () => {
  return jest.fn(() => [1,2,3,4])
})

test("bad example: app.getData() depends on the actual results of fetchData()", () => {
  //
});

test("good example: app.getData() shouldn't depend on the actual results of fetchData()", async () => {
  // TODO: write unit test for app.getData() and mock out fetchData()
  const app = new App()
  const result = await app.getData()
  expect(fetchData).toBeCalled();
  expect(result.length).toBe(4)
  // expect(result.length).toBeCalled
  // expect(fetchData).toBeCalled
});
