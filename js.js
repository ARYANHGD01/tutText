var  checkList = document.getElementById("checkList");

var inputs = checkList.querySelectorAll("input");

var items = checkList.querySelectorAll("li");

for (let index = 0; index < items.length; index++) {
    items[index].addEventListener("click", editItem);
    inputs[index].addEventListener("blur", updateItem);
    inputs[index].addEventListener("keypress", itemKeyPress);
}

function editItem () {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem () {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeyPress(event) {
    if (event.which === 13) {
        updateItem.call(this);
    }
}