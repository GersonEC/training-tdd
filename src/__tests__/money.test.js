
class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

}

describe('Money', () => {
  it("test multiplication", () => {
    let fiver = new Dollar(5);
    let tenner = fiver.times(2);
    expect(tenner.amount).toEqual(10);
  })
});
