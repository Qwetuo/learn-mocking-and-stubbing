const Printer = require("./Printer");
const printer = new Printer();

test("displayOnConsole() should call console.log", () => {
  global.console = {
    log: jest.fn()
  };

  printer.displayOnConsole("hello world");
  expect(console.log).toBeCalledWith("hello world");
});
