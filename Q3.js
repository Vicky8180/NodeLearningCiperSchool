function countVowels(str) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
  
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const inputString = 'Hello, World!';
  const numVowels = countVowels(inputString);
  
  console.log("The number of vowels in the string is: " + numVowels);
  