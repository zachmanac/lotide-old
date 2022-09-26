const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function (array1, array2) {

  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
};

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    const value1 = object1[key1];
    const value2 = object2[key1];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (eqArrays(value1, value2) === true) {
        continue;
      } else {
        return false;
      }

    } else {
      if (value1 === value2) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1",
};

eqObjects(ab, ba); //true
assertEqual(eqObjects(ab, ba), true)

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
eqObjects(ab, abc); // false
assertEqual(eqObjects(ab, abc), false)

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true)

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false)