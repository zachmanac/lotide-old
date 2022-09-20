const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(assertEqual) {
  return assertEqual.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);