var chocolateBars;
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b){
  var c = a
  c.unshift(b)
  return c
}

function destructivelyAddElementToBeginningofArray(a, b){
  a.unshift(b)
  return a
}
function accessElementInArray(){
choclateBars[1]
}