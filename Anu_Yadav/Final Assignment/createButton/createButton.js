window.onload = function() {
    document.getElementById('destroy').addEventListener('click', createNewButton, false);
};

//to create two new button on click of button
var createNewButton = function() {
    var buttonElem = '';
    for (var i = 1; i < 3; i++) {
        buttonElem += '<button id=' + i + '>button ' + i + '</button>';
    }
    document.body.innerHTML = buttonElem;
};
