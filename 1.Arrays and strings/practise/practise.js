//Palindrome

var isPalindrome = function (s) {
  let newString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(newString);
  let left = 0;
  let right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");

var twoSum = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (sortedNums[left] + sortedNums[right] === target) {
      return [left, right];
    } else if (sortedNums[left] + sortedNums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));

var isSubsequence = function (s, t) {
  let s1 = 0;
  let s2 = 0;
  while (s1 < s.length && s2 < t.length) {
    if (s[s1] === t[s2]) {
      s1++;
    }
    s2++;
  }
  return s1 === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
