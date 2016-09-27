var detailsArray = [],
  activityArr = [],
  totalCount;
//to reset Input fields
var resetInput = function() {
  event.preventDefault();
  document.getElementById('name-input').value = '';
  document.getElementById('relation-input').value = '';
  document.getElementById('age-input').value = '';
  document.getElementById('activity-input').value = '';
  totalCount = totalCount - 1;
  if (totalCount <= 0) {
    renderFinalTableData();
  } else {
    return false;
  }
};
/*to fetch values from all the Input fields 
and push into an object
*/
function details(name, age, relation, activity) {
  this.name = name;
  this.age = age;
  this.relation = relation;
  this.activity = activity;
}
var parent = undefined;
var getInputValues = function() {
  event.preventDefault();
  var nameValue = document.getElementById('name-input').value,
    relationInputValue = document.getElementById('relation-input').value,
    ageInputValue = document.getElementById('age-input').value,
    activitiesInputValue = document.getElementById('activity-input').value;
  if ((nameValue && relationInputValue && ageInputValue && activitiesInputValue) != '') {
    if (parent == undefined) {
      parent = Object.create(details);
      parent.activity = activitiesInputValue;
    } else {
      parent.activity = parent.activity + ', ' + activitiesInputValue;
    }
    var detailObj = new details(nameValue, relationInputValue, ageInputValue, parent.activity);
    detailsArray.push(detailObj);
    console.log(detailsArray);
    resetInput();
  } else {
    alert("Please fill up the details");
  }

};
//display form to enter family details
var renderForm = function(event) {
  event.preventDefault();
  var membersCount = document.getElementById('family-members-count').value;
  totalCount = membersCount;
  document.getElementById('family-members-form').className = 'show';
  document.getElementById('family-members-count-wrapper').className = 'hide';
  document.getElementById('next-button').addEventListener('click', getInputValues, false);
};
//render table to display family details
var renderFinalTableData = function() {
  event.preventDefault();
  var createTable = '<table id="familyDetailsTable">';
  createTable += '<tr><td>Name</td><td>Relation</td><td>Age</td><td>Activity</td></tr>';
  for (var x = 1; x <= detailsArray.length; x++) {
    createTable += '<tr>';
    console.log(Object.keys(detailsArray[x - 1]));
    for (var i in detailsArray[x - 1]) {
      createTable += '<td>' + detailsArray[x - 1][i] + '</td>';
    }
    createTable += '</tr>';
  }
  createTable += '</table>';
  document.getElementById('family-members-form').innerHTML = createTable;
};
var init = function() {
  document.getElementById('proceed-button').addEventListener('click', renderForm, false);
};
