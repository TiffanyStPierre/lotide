const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [8, 10] for [2, 6, 8, 10, 13, 24]", () => {
    assert.deepEqual(middle([2, 6, 8, 10, 13, 24]), [8, 10]);
  });

  it("returns [8] for [2, 5, 8, 12, 24]", () => {
    assert.deepEqual(middle([2, 5, 8, 12, 24]), [8]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });

  it("returns [] for [13, 24]", () => {
    assert.deepEqual(middle([13, 24]), []);
  });

  it("returns [3, 900] for [2, 16, 65, 120, 89, 6, 3, 900, 12, 6, 8, 10, 13, 24]", () => {
    assert.deepEqual(middle([2, 16, 65, 120, 89, 6, 3, 900, 12, 6, 8, 10, 13, 24]), [3, 900]);
  });

  it("returns [16] for [2, 16, 65, 120, 89, 6, 3, 900, 12, 6, 8, 10, 13, 24]", () => {
    assert.deepEqual(middle([2, 16, 65, 120, 89, 6, 3, 900, 16, 19, 87, 12, 6, 8, 10, 13, 24]), [16]);
  });
});