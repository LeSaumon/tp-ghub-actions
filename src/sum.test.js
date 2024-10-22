const test = require("node:test");

const sum = require("./sum");
const assert = require("node:assert");
test("Test the sum function", (t) => {
  assert.equal(sum(1, 2), 3);
});
