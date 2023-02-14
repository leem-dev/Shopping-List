const inputText = document.querySelector("input");
const enterButton = document.querySelector(".enter-button");
const ulFile = document.querySelector("ul");
const deleteButton = document.getElementsByClassName("delete")

// create new list
const checkVal = () => {
  let createNewButton = document.createElement("button");
  createNewButton.classList.add("delete");
  createNewButton.innerHTML = "Delete";
  createNewButton.onclick = removeParent
  
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(inputText.value));
  newLi.appendChild(createNewButton)
  ulFile.appendChild(newLi);
  inputText.value = "";
}

const removeParent = (event) => {
  event.target.removeEventListener("click", removeParent, false);
  event.target.parentNode.remove();
}

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", removeParent, false);
}

//check for value.
const inputVal = () => inputText.value.length > 0;

//condition for BUTTON
const addToButton = () => inputVal() ? checkVal() : "";
//condition for KEYPRESS
const addToKeyPress = (event) => (inputVal() && event.keyCode === 13) ? checkVal() : "";

// ENTER BUTTON
enterButton.addEventListener("click", addToButton);
// KEYPRESS === ENTER
inputText.addEventListener("keypress", addToKeyPress);

