var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var c = ["snickers", "hundred grand"]
c = ["kitkat", ...chocolateBars]

function addElementToBeginningOfArray(array, element) {
  return [element...array]
}