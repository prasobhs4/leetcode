var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    const tempString = s[left];
    s[left] = s[right];
    s[right] = tempString;
    left++;
    right--;
  }
};

reverseString(["h", "e", "l", "l", "o"]);

//https://leetcode.com/problems/reverse-string/submissions/1486834841/
