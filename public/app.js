var listFromLocalStorage = localStorage.getItem('list');

var tasks = listFromLocalStorage ? JSON.parse(listFromLocalStorage) : [];
// created 'guard' is list null if so use empty array.  JSON.parse splits the string pulled form local storage back into an array of items


var populateList = function() {
 var toDoList = document.querySelector('#to-do-list');
 toDoList.innerHTML=""; // clears toDoList element before iteration to prevent duplication in list on screen

 for (var i=0; i< tasks.length; i++){
    var toDoElement = document.createElement('li');
    toDoElement.innerText = tasks[i];
    toDoList.appendChild(toDoElement);
    //for each item in the list append to the DOM
 }
}

var handleOnClick = function(){
  var input = document.querySelector('input'); // grab the input from the text box
  var inputText = input.value; // extract the value from the text box input
  input.value =""; // clear the text box
  tasks.unshift(inputText);// put the new item to the front of the array list

  localStorage.setItem("list",JSON.stringify(tasks)); // persist the array to local storage.  used JSON stringify to avoid comma seperator confusion as local storage only stores a string.
  populateList();
  //call the populate list function
}

var app = function() {
  populateList();
  var button=document.querySelector('button');
  //identifies the button
  button.onclick = handleOnClick; // points to function to execute when button is clicked
}

window.onload = app;

