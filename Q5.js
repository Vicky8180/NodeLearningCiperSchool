function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
  }
  
  const inputString = 'A man, a plan, a canal: Panama';
  const isPalindromic = isPalindrome(inputString);
  
  if (isPalindromic) {
    console.log("True");
  } else {
    console.log("False");
  }
  