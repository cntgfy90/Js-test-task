// Providing that we have an array [10,20,30],
// we should expect the output to be [20,10,30],
// so that first two element's places are changed

// Implementation with ES5 syntax
function changeElements(list) {
  var arrayFrom2Index;
  if (list.constructor.name.toLowerCase() === 'array') { // check if the first element in arguments array-like object is an array
    arrayFrom2Index = Array.prototype.slice.call(arguments[0], 2); // transform arguments to array and slice from 2 index
  }

  // Return new array with changed places of first two indexes and the rest
  return [
    list[1],
    list[0],
  ].concat(arrayFrom2Index);
}

console.log(changeElements([10,20,30])) // output ---> [20,10,30]

// Implementation with ES6 syntax
function changedElementsES6(list) {
  let arrayFrom2Index;
  if (Array.isArray(list) && list.length > 1) {
    return [
      list[1],
      list[0],
      ...list.slice(2) // return new array, no mutation
    ];
  }
}

console.log(changedElementsES6([10,20,30])) // output --> [20,10,30]
