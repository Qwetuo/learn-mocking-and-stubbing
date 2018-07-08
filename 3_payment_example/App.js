const { makePayment, refundPayment } = require("./paymentService");

class App {
  constructor(paymentQueue) {
    this.paymentQueue = paymentQueue;
  }

  start() {
    while (this.paymentQueue.length > 0) {
      const currentItem = this.paymentQueue.shift();
      makePayment(currentItem);
      refundPayment(currentItem, 2);
    }
  }
}

module.exports = App;
