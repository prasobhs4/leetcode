// Hashing algorithms

// two sum using hashing algorithm

const s = [5, 2, 7, 10, 3, 9];
const t = 8;

const twoSumUnsorted = (s, t) => {
  const hashTable = {};
  for (let i = 0; i < s.length; i++) {
    const val = t - s[i];
    if (val in hashTable) {
      return [hashTable[val], i];
    }
    hashTable[s[i]] = i;
  }
};

console.log(twoSumUnsorted(s, t));

const twoSumUnsortedHashMap = (s, t) => {
  const dictionary = new Map();
  for (let i = 0; i < s.length; i++) {
    const val = t - s[i];
    const valFound = dictionary.has(val);
    if (valFound) {
      return [dictionary.get(val), i];
    }
    dictionary.set(s[i], i);
  }
};

let s1 = "abccbaacz";
// Output: "c"

var repeatedCharacter = function (s) {
  const hashTable = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in hashTable) {
      return s1[i];
    }
    hashTable[s1[i]] = i;
  }
};

console.log(repeatedCharacter());
