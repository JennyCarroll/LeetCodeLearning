// Write a function that takes a string s as input and returns the string reversed using recursion.

// For example:

// reverseString("hello") should return "olleh".

// reverseString("world") should return "dlrow".

// reverseString("a") should return "a".

// reverseString("") should return "" (empty string).

const reverseWord = (str) => {
  if (str.length === 0) {
    return "";
  }
  const indexOfLetterToUse = str.length - 1;
  return (
    str.charAt(indexOfLetterToUse) +
    reverseWord(str.slice(0, indexOfLetterToUse))
  );
};

console.log(reverseWord("something"));
