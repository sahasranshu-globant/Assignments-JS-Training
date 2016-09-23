function Car(color,model,engine,speed) {
    this.color = color;
    this.model = model;
    this.engine = engine;
    this.topSpeed = speed;
 }
 var jazz = new Car("blue","Jazz",1248,160);
 var hyundai = new Car("red","hyundai",1366,170);
 var baleno = new Car("orange",'Baleno',1496,180);
 
 function getDetails(carProperty) {
    var cars = [jazz,hyundai,baleno];
    var desiredCar;

    cars.forEach(function(car){
     for(var props in car) {
           if(car[props] == carProperty) {
                desiredCar = car;
            }
       }
   });
    
    if(desiredCar) {
        //console.log(desiredCar);
      return desiredCar;
     } else {
         alert("property is not present");
     }
 }   
 
 function customModel(carObj,Prop) {
    var car = getDetails(Prop);
   
     carObj.color = car.color;
     return carObj; 
 }

     var res = customModel(jazz,"red");
     console.log(res);
