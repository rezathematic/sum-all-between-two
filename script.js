// Intermediate Algorithm Scripting: Seek and Destroy
function destroyer(arr) {
  var a = Array.prototype.slice.call(arguments, 1);
  return arr
    .filter(x => a.indexOf(x) == -1)
  ;
}

var a = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(a);

// add the value of the reversedString function to <p> tag
function returnReverse() {
    let str = document.getElementById("string").value;
    document.getElementById("reversed").innerHTML = reverseString(str);
};