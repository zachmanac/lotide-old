const eqArrays = require('./eqArrays');

let assertArraysEqual = function (array1, array2) {
  
  if(eqArrays === false) {
    return console.log(`❌️ Length of arrays are not equal ${array1} != ${array2}`);
  } 
  
  return console.log(`✅️ ${JSON.stringify(array1)} = ${JSON.stringify(array2)}`);
};

module.exports = assertArraysEqual;