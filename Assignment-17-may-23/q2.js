function findProductSign(num1, num2, num3) {
  var product = num1 * num2 * num3;
  var sign;

  if (product > 0) {
    sign = "+";
  } else if (product < 0) {
    sign = "-";
  } else {
    sign = "0";
  }

  alert("The sign is " + sign);
}

var number1 = 3;
var number2 = -7;
var number3 = 2;

findProductSign(number1, number2, number3);
