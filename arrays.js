var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArary(array, element){
  array.push()
}