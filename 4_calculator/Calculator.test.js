const Calculator = require("./Calculator");

test("typical unit tests for add", () => {
  const calculator = new Calculator({});
  calculator.add(5).add(10);

  expect(calculator.result).toEqual(15);
});

test("typical unit tests for subtract", () => {
  const calculator = new Calculator({});
  calculator.subtract(5).subtract(10);

  expect(calculator.result).toEqual(-15);
});

test("should call printer's displayOnConsole method", () => {
  const mockPrinter = {
    displayOnConsole: jest.fn()
  };

  const calculator = new Calculator(mockPrinter);

  calculator.add(1).display();

  // TODO: test .display()
});
