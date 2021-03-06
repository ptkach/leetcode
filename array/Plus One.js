/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  var len = digits.length;

  if (len === 0) {
    return [0];
  }

  var add = 1;

  for (var i = len - 1 ; i >= 0 ; i--) {

    var sum = add + digits[i];

    digits[i] = sum % 10;

    add = (sum / 10) >> 0;

    if (add === 0) {
      return digits;
    }

  }

  digits.unshift(add);

  return digits;

};

// 3/31/2016
const plusOne = (d) => {
  let len = d.length;
  let carry = 1;
  while (len--) {
    const sum = d[len] + carry;
    d[len] = sum % 10;
    carry = (sum / 10) >> 0;
    if (!carry) return d;
  }

  if (carry) d.unshift(carry);

  return d;
};

// 9/11/2016
var plusOne = function(digits) {

  let carry = 1;
  let len = digits.length;
  while (len--) {
    const sum = digits[len] + carry;
    digits[len] = (sum % 10);
    carry = (sum / 10) >> 0;
  }
  return carry ? [carry].concat(digits) : digits;
};

// 10/21/2016
const plusOne = digits => {
  let carry = 1;
  let len = digits.length;
  while (len--) {
    const sum = digits[len] + carry;
    digits[len] = sum % 10;
    carry = (sum / 10) >> 0;
    if (carry === 0) return digits;
  }
  return carry ? [carry, ...digits] : digits;
};
