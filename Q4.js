function reverseNumber(num) {
    let reversed = 0;
  
    while (num !== 0) {
      const digit = num % 10;
      reversed = (reversed * 10) + digit;
      num = Math.floor(num / 10);
    }
  
    return reversed;
  }
  
  const inputNumber = 12345;
  const reversedNumber = reverseNumber(inputNumber);
  
  console.log("The reversed number is: " + reversedNumber);
  