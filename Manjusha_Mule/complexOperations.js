function complexOperations(param){
  var a = param;
  function setB(param){
    var b = param;
      
      function setC(param){
        var c = param;
        console.log("The Result is : " + (a*b-c));
      }
      return setC;
  }
  return setB;
}

complexOperations(5)(10)(2);