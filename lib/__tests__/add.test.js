"use strict";

const add = require("../add");

describe("myFunc", () => {
  it("returns 2 for 1,1", () => {
    expect(add(1, 1)).toBe(2);
  });
});
