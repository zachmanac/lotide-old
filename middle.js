let eqArrays = function (array1, array2) {
  
  if(array1.length !== array2.length) {
    return false
  } 
  
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false
    }
  } return true
}

let assertArraysEqual = function (array1, array2) {
  
  if(array1.length !== array2.length) {
    return console.log(`❌️ Length of arrays are not equal ${array1} != ${array2}`)
  } 
  
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return console.log(`❌️ This value ${JSON.stringify(array1[i])} is not equal to ${JSON.stringify(array2[i])}`)
    }
  } return console.log(`✅️ ${JSON.stringify(array1)} = ${JSON.stringify(array2)}`)
}

const middle = function(array) {
  if (array.length <= 2)
    return [];
  
  let mid = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(mid)]];
  } else {
    return [array[mid - 1], array[mid]];
  }
}

assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
