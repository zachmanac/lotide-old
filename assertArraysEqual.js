let eqArrays = function (array1, array2) {
  
  if(array1.length !== array2.length) {
    return console.log(`❌️ Length of arrays are not equal ${array1} != ${array2}`)
  } 
  
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return console.log(`❌️ This value ${JSON.stringify(array1[i])} is not equal to ${JSON.stringify(array2[i])}`)
    }
  } return console.log(`✅️ ${JSON.stringify(array1)} = ${JSON.stringify(array2)}`)
}

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])