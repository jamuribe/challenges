const assert = require('assert');
const { Calculator, f3 } = require('./index');

describe('Sum value', function () {
  describe('Add', function () {
    it('should return 8', function () {
      assert.equal(Calculator.getSum(), 8);
    });
  });
});

describe('F3', function () {
  describe('F3 testing', function () {
    it('Lets see', function () {
      return f3()
        .then(() => {
          assert.equal(true, true);
        })
    });
  });
});


// test.skip("f3", async () => {
//   // How will you test f3
// });

// test.skip("float values", () => {
//   // expect(13.98 + 6.58===20.56).toBeTruthy();
//   // expect(13.98 + 6.58===20.56).toBeFalsy();
// });