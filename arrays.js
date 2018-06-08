var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolateBars = ["snickers", "hundred grand"]
chocolateBars = ["kitkat", ...chocolateBars]

function addElementToBeginningOfArray(a, b){
  var chocolateBars = a
  chocolateBars.unshift(b)
  return chocolateBars
}

function destructivelyAddElementToBeginningofArray(a, b){
  a.unshift(b)
  return a
}
function AddElementToEndofArray(x, y){
  var c = a 
  c.unshift(b)
  return c
}