import { add } from "../src/index";

describe("testing suite", () => {
  it("test addition", () => {
    const result = add(1, 5);
    expect(result).toEqual(6);
  });
});
