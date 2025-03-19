/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed
// by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function (ransomNote, magazine) {
  const myDict = {};
  for (let i = 0; i < magazine.length; i++) {
    myDict[magazine[i]]
      ? (myDict[magazine[i]] += 1)
      : (myDict[magazine[i]] = 1);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (myDict[ransomNote[i]]) {
      myDict[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

// time complexity is O(n+m) because both the loops are based on the lengths of their respective strings
// Space complexity: O(1) constant because myDict will store at most 26 keys which is constant.
