const listContainer = document.getElementById("container");
let items = [];

const modifyHTML = () => {
  // empty list container
  listContainer.innerHTML = "";

  items.forEach((item, index) => {
    // create a list item
    const listItem = document.createElement("li");

    // give the list item an id
    listItem.id = item;

    // create up, down, and remove buttons
    let buttonUp = '<button onclick="moveUp(this)">UP</button>';
    let buttonDown = '<button onclick="moveDown(this)">DOWN</button>';
    let buttonRemove = '<button onclick="removeItem(this)">REMOVE</button>';

    if (index === 0) {
      // exclude up button from first item
      buttonUp = "";
    }
    if (index === items.length - 1) {
      // exclude the down button from last item
      buttonDown = "";
    }

    // add all buttons and text
    listItem.innerHTML = `${item} ${buttonUp} ${buttonDown} ${buttonRemove}`;

    // add the list item to the list container.
    listContainer.appendChild(listItem);
  });
};

const moveUp = (elem) => {
  // get the new position of item by subtracting 1 to its current index
  let newPosition = items.indexOf(elem.parentElement.id) - 1;

  // remove current item from list
  items = items.filter((item) => item !== elem.parentElement.id);

  // add the current item at its new index
  items.splice(newPosition, 0, elem.parentElement.id);
  modifyHTML();
};

const moveDown = (elem) => {
  // get the new position of item by adding 1 to its current index
  let newPosition = items.indexOf(elem.parentElement.id) + 1;

  // remove current item from list
  items = items.filter((item) => item !== elem.parentElement.id);

  // add the current item at its new index
  items.splice(newPosition, 0, elem.parentElement.id);
  modifyHTML();
};

const removeItem = (elem) => {
  // select all items that are not the current item being deleted
  items = items.filter((item) => item !== elem.parentElement.id);
  modifyHTML();
};

const addItem = () => {
  // get the input value
  let newItem = document.getElementById("inputItem");

  // you can reject empty/undefined strings or items that already exists
  if (!newItem.value || items.includes(newItem.value)) {
    alert("Invalid input");
    return;
  }

  items.push(newItem.value);

  modifyHTML();

  // clean up text field
  newItem.value = "";
};

document.getElementById("addButton").addEventListener("click", addItem);
