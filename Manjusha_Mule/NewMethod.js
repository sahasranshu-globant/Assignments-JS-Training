function Person(arr){
	var obj = {};

	for(var i =0 ; i < arr.length ; i++)
	{
		switch (i) {
			case 0:
				obj.firstName = arr[i];
				break;
			case 1:
				obj.lastName = arr[i];
				break;	
			case 2:
				obj.age = arr[i];
				break;
			case 3:
				obj.address = arr[i];
				break;		
		}
	}

	return obj;
}

function NewMethod(){
	var fun = arguments[0];
	
	return fun(arguments[1]);
}

var person1 = NewMethod(Person,["Manjusha","Mule", 23, "Pune"]);

console.log(person1);
