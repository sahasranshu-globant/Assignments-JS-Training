//cnstructor function
function Person(abc) {
    this.namePerson = abc;
};

function NewMethod(method, prop) {
 	var createObj = {};
    method.apply(createObj, prop);
    return createObj;
};
//to create instance of NewMethod
var obj = NewMethod(Person, ["Anu"]);
console.log(obj);