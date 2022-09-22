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

let without = function (array, itemToRemove) {
  
  let arrayWithout = [] 

  for (let i = 0; i < array.length; i++) {
    if (!itemToRemove.includes(array[i])) {
        arrayWithout.push(array[i])
    }
  } console.log(arrayWithout)
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without([1, "hi", 4], [1, 2, "3"])
without([1, 4, "hello", "jimmy", 5], [4, 5])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);