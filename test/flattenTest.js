const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it("returns [1, 2, 3, 4, 5] for [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  });

  it("returns ['dog', 'cat', 'monkey', 'iguana', 'deer'] for [['dog', 'cat', 'monkey', 'iguana'], 'deer']", () => {
    assert.deepEqual(flatten([['dog', 'cat', 'monkey', 'iguana'], 'deer']), ['dog', 'cat', 'monkey', 'iguana', 'deer']);
  });

  it("returns ['dog', 'cat', 'monkey', 'iguana', 'deer'] for ['dog', ['cat', 'monkey', 'iguana', 'deer']]", () => {
    assert.deepEqual(flatten(['dog', ['cat', 'monkey', 'iguana', 'deer']]), ['dog', 'cat', 'monkey', 'iguana', 'deer']);
  });
});