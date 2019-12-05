"use strict";

{
  const addFoodForm = document.querySelector("#add-food");

  addFoodForm.addEventListener("submit", e => {
    e.preventDefault();

    const itemToAdd = document.querySelector("#name");
    
    if (itemToAdd.value && isNaN(itemToAdd.value)) {
      // <li></li>
      const itemHTML = document.createElement("li");

      // <li class="list-item"></li>
      itemHTML.classList.add("list-item");

      // <li class="list-item"> Text from the input in Here </li>
      itemHTML.innerText = itemToAdd.value;

    //   itemHTML.addEventListener("click", e => {
    //     itemHTML.classList.toggle("completed");
    //   });

      const addFruit = document.querySelector("#fruitlist");
      addFruit.appendChild(itemHTML);
      itemToAdd.value = "";
//ADDITION STARTS HERE
    } else if (itemToAdd.value && isNaN(itemToAdd.value)) {
            // <li></li>
            const itemHTML = document.createElement("li");
      
            // <li class="list-item"></li>
            itemHTML.classList.add("list-item");
      
            // <li class="list-item"> Text from the input in Here </li>
            itemHTML.innerText = itemToAdd.value;
      
            const addVeggie = document.querySelector("#veggielist");
            addVeggie.appendChild(itemHTML);
            itemToAdd.value = "";
//ADDITION ENDS HERE
    } else {
      alert("You didn't type anything you jerk");
    }
  });
}
