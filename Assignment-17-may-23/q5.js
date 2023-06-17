function isHappyNumber(num) {
    var visitedNumbers = {};
  
    while (num !== 1 && !visitedNumbers[num]) {
      visitedNumbers[num] = true;
      var digits = num.toString().split('').map(Number);
      num = digits.reduce(function(sum, digit) {
        return sum + (digit * digit);
      }, 0);
    }
  
    return num === 1;
  }
  
  function findHappyNumbers(count) {
    var happyNumbers = [];
    var num = 1;
  
    while (happyNumbers.length < count) {
      if (isHappyNumber(num)) {
        happyNumbers.push(num);
      }
      num++;
    }
  
    return happyNumbers;
  }
  
  var happyNumbers = findHappyNumbers(5);
  console.log("The first 5 happy numbers are: " + happyNumbers.join(", "));
  