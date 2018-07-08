class Calculator {
  constructor(printer) {
    this.printer = printer;
    this.result = 0;
  }

  add(number) {
    this.result = this.result + number;
    return this;
  }

  subtract(number) {
    this.result = this.result - number;
    return this;
  }

  display() {
    this.printer.displayOnConsole(this.result);
  }
}

module.exports = Calculator;
