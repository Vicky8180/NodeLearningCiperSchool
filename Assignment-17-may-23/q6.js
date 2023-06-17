function isArmstrongNumber(num) {
    var originalNumber = num;
    var sum = 0;
  
    while (num > 0) {
      var digit = num % 10;
      sum += Math.pow(digit, 3);
      num = Math.floor(num / 10);
    }
  
    return sum === originalNumber;
  }
  
  function findArmstrongNumbers() {
    var armstrongNumbers = [];
  
    for (var num = 100; num < 1000; num++) {
      if (isArmstrongNumber(num)) {
        armstrongNumbers.push(num);
      }
    }
  
    return armstrongNumbers;
  }
  
  var armstrongNumbers = findArmstrongNumbers();
  console.log("Armstrong numbers of 3 digits: " + armstrongNumbers.join(", "));
  