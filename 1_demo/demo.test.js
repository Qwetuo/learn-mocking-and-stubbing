// mock Implementation example
// const myMock =jest.fn()
// myMock.mockImplementation(
//   () => "anything"
// )

// have to read the file's module.exports to see how to mock/stub


describe("jest.fn() examples", () => {
  test("how to create a mock and how to assert on it", () => {
    const myMock = jest.fn();

    const result = myMock("foo");

    expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith("foo");
    expect(result).toBeUndefined();
  });

  test("how to make mocks return specific values (a.k.a. stubbing)", () => {
    const myMock = jest.fn(() => "bar");

    const result = myMock("foo");

    expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith("foo");
    expect(result).toBe("bar");
  });
});
