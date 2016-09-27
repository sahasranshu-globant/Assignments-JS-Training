function sum(){
	var total = 0;
	for( var i = 0 ; i < arguments.length ; i++){
		total += arguments[i];
	}
	console.log(total);
}

sum(10,2,5);
sum(1,3,2,7);
