function sumMultiplesOfThreeAndFive(limit) {
    var sum = 0;
  
    for (var i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  var limit = 1000;
  var result = sumMultiplesOfThreeAndFive(limit);
  
  console.log("The sum of multiples of 3 and 5 under " + limit + " is: " + result);
  