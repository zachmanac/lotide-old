const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let findKeyByValue = function(shows, value) {
  
  let keys = Object.keys(shows);
  let keyShow;

  for (let key of keys) {
    if (shows[key] === value) {
      keyShow = key;
    }
  }
  return keyShow;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);