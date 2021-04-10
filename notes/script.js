let myToDoList = [];

function toDoItem(name, description) {
  (this.name = name),
    (this.description = description),
    (this.completed = false);
}
addToList("shopping", "fish, tomatoes");
addToList("excercise", "weights, run");
addToList(
  "james",
  "attack with love, over and over again until he counter-attacks at which point run away away away away"
);
function addToList(name, description) {
  let newToDoItem = new toDoItem(name, description);
  myToDoList.push(newToDoItem);
  displayToDoList();
}

function newTaskInput() {
  var form = document.createElement("form");
  form.id = "new-task-form";
  form.innerHTML =
    '<input id="title" type="text" placeholder="title">' +
    '<input id="description" type="text" placeholder="description"> ' +
    '<button id="submit-button" type="submit">enter</button>' +
    '<button id="cancel-button" onclick="form.remove()">x</button>';
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addToList(form.title.value, form.description.value);
    form.remove();
  });
  document.body.appendChild(form);
}
function displayToDoList() {
  list = document.getElementById("list");
  list.innerHTML = "";
  myToDoList.forEach((x) => {
    const n = myToDoList.indexOf(x);
    const listItem = document.createElement("div");

    createRemoveListItemButton(n);
    createCompletedListItemButton(n);
    x.completed == false
      ? (listItem.className = "not-completed")
      : (listItem.className = "completed");
    list.appendChild(listItem);

    listItem.appendChild(removeListItemButton);

    const name = document.createElement("h3");
    name.className = "name";
    name.innerHTML = x.name;
    listItem.appendChild(name);

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = x.description;
    listItem.appendChild(description);

    listItem.appendChild(completedListItemButton);
  });
}
function createRemoveListItemButton(n) {
  const x = n;
  removeListItemButton = document.createElement("button");
  removeListItemButton.id = x;
  removeListItemButton.className = "remove-list-item-button";
  removeListItemButton.innerHTML = "x";
  removeListItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    removeListItem(x);
  });
}
function removeListItem(clicked_id) {
  const x = clicked_id;
  myToDoList.splice(x, 1);
  displayToDoList();
}
function createCompletedListItemButton(n) {
  const x = n;
  completedListItemButton = document.createElement("button");
  completedListItemButton.id = x;
  completedListItemButton.className = "completed-list-item-button";
  completedListItemButton.innerHTML = "completed";
  completedListItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    completedListItem(x);
  });
}
function completedListItem(clicked_id) {
  const x = clicked_id;
  myToDoList[x].completed = !myToDoList[x].completed;
  console.log(myToDoList[x].completed);
  displayToDoList();
}
