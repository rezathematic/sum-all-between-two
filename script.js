// defining the function - take an input, convert it to string and return the reversed string
var numArray = [4,1];
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }

console.log(sumAll(numArray));

// add the value of the reversedString function to <p> tag
function returnReverse() {
    let str = document.getElementById("string").value;
    document.getElementById("reversed").innerHTML = reverseString(str);
};