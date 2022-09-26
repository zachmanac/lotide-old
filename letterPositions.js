let eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

let assertArraysEqual = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return console.log(`❌️ Length of arrays are not equal ${array1} != ${array2}`);
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log(`❌️ This value ${JSON.stringify(array1[i])} is not equal to ${JSON.stringify(array2[i])}`);
    }
  } return console.log(`✅️ ${JSON.stringify(array1)} = ${JSON.stringify(array2)}`);
};


const letterPositions = function(sentence) {
  
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
