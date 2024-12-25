const st = "thequickbrownfoxjumpsoverthelazydog";
var checkIfPangram = function () {
  const newSet = new Set();
  for (let i = 0; i < st.length; i++) {
    newSet.add(st[i]);
  }
  return newSet.size === 26;
};

console.log(checkIfPangram());
