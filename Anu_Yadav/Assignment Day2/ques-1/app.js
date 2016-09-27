//to calculate complex operation (a*b-c)
function complexOperations(a, b, c) {
  var result = 0;
  function performOperation() {
    result = (a*b-c);
    return result;
  }
  return {
    operationResult: performOperation()
  }
}
//to display output in label
var showOuput = function() {
  var value_a = document.getElementById('input-a').value;
  var value_b = document.getElementById('input-b').value;
  var value_c = document.getElementById('input-c').value;
  if ( (value_a && value_b && value_c) == "") {
    alert("Please Enter your input");
  } else {
    var finalOutput = complexOperations(value_a, value_b, value_c).operationResult;
    document.getElementById('display-output').innerHTML = finalOutput;
  }
}
