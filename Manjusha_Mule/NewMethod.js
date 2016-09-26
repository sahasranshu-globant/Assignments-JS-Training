
function Person(fname, lname, age, address){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.address = address;
}


function NewMethod(){
	var fun = arguments[0];
	var obj = {};
	fun.apply(obj, arguments[1]);
	return obj;
}

var person1 = NewMethod(Person,["Manjusha","Mule", 23, "Pune"]);

console.log(person1);
