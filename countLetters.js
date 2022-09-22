const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  
  let results = {}
  
  for (const letter of sentence) {
    if (letter === " ") {
      continue
    }
    if (results[letter]) {
        results[letter] += 1
      } else {
        results[letter] = 1 
      }
  }
  return results
}

console.log(countLetters("lighthouse in the house"))