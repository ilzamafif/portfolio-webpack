const sum = (a, b) => a + b;

describe("A Sample Test for Sum", () => {
  it("should return a + b value", () => {
    expect(sum(a, b)).toEqual(5);
  });
});
