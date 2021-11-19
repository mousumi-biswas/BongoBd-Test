const isAnagram = require("./anagram");

test('"bleat" is an anagram of "table"', () => {
  expect(isAnagram("bleat", "table")).toBeTruthy();
});
test('"eat" is not  an anagram of "tar"', () => {
  expect(isAnagram("eat", "tar")).toBeFalsy();
});
