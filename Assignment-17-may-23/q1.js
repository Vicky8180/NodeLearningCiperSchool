function findLargestInteger(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  var num1 = 15;
  var num2 = 27;
  
  var largestInteger = findLargestInteger(num1, num2);
  console.log("The largest integer is: " + largestInteger);
  