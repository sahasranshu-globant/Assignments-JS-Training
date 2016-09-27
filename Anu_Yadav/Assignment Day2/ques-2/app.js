//to display properties of car 
function getCarInfo(prop) {
    var findDetails = function() {
        var carDetails = [{
            brand: "Maruti",
            model: "Baleno",
            color: "Blue",
            power: "1248",
            topSpeed: "160"
        }, {
            brand: "Hyundai",
            model: "Elitei20",
            color: "Red",
            power: "1366",
            topSpeed: "170"
        }, {
            brand: "Honda",
            model: "Jazz",
            color: "Orange",
            power: "1496",
            topSpeed: "180"
        }];
        for (var i in carDetails) {
            Object.keys(carDetails[i]).forEach(function(key) {
                var val = carDetails[i][key];
                if (val == prop) {
                    console.log(carDetails[i]);
                    return carDetails[i];
                }
            });
        }
    }
    return { showCarDetails: findDetails() }
};
//function call to see car properties
getCarInfo("Blue");
