var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var c = ["snickers", "hundred grand"]
c = ["kitkat", ...chocolateBars]

function addElementToBeginningOfArray(a, b){
  var c = a
  c.unshift(b)
  return c
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