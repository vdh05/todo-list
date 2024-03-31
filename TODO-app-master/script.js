document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("addButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <input type="text" class="taskText" value="${taskText}" readonly>
              <button class="editButton">Edit</button>
              <button class="removeButton">Remove</button>
          `;
          taskList.appendChild(listItem);
          taskInput.value = "";
      }
  });

  taskList.addEventListener("click", function(event) {
      const target = event.target;
      if (target.classList.contains("editButton")) {
          const taskText = target.previousElementSibling;
          taskText.readOnly = !taskText.readOnly;
          taskText.focus();
      } else if (target.classList.contains("removeButton")) {
          target.parentElement.remove();
      }
  });
});
