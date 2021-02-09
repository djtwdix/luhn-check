const luhnCheck = function(number) {
  let numArr = number.toString().split("").reverse();
  let sum = 0;
  numArr = numArr.map(x => x = Number(x));
  if (Number(number) === NaN) {
    return "Please enter a number"
  }
  for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== 0) {
      if (numArr[i] * 2 >= 10) {
        const numString = (numArr[i] * 2).toString()
        sum += Number(numString[0]) + Number(numString[1]);
      } else {
        sum += numArr[i] * 2;
      }
    } else {
      sum += numArr[i];
    }
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = luhnCheck;