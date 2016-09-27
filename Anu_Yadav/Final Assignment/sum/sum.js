//to do sum of all parameters 
var sum = function() {
    var getAllParameters = arguments,
        total = 0;
    for (var i in getAllParameters) {
        total = total + getAllParameters[i];
    }
    console.log(total);
};
sum(2, 3, 15);