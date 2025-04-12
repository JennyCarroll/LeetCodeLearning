var getExponentOfTwo = function (n, count = 0) {
  if (n <= 0) {
    return false;
  }
  if (n === 1) {
    console.log(count);
    return count;
  }

  return getExponentOfTwo(n / 2, ++count);
};

getExponentOfTwo(8);
