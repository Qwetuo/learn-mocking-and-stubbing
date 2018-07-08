const COMPENSATION_PREMIUM = 2;

const makePayment = amount => {
  console.log(`actually making payment of $${amount}`);
  return amount;
};

const refundPayment = amount => {
  console.log(`actually making refund  of $${amount + COMPENSATION_PREMIUM} `);
  return amount;
};

module.exports = {
  makePayment,
  refundPayment
};
