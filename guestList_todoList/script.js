const addInput = document.querySelector("#addInput");
const btnAdd = document.querySelector("#btnAdd");
const errorText = document.querySelector("#errorText");
const guestList = document.querySelector("#guestList");
const guestCount = document.querySelector("#guestCount");
let count = 0;

const addList = () => {
  if (addInput.value == "") {
    errorText.textContent = "Please enter the guest name";
    return;
  }
  errorText.textContent = "";

  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = addInput.value;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = `<svg viewBox="0 0 10 10" width="0.75em" height="0.75em"
         stroke="currentColor" stroke-width="2">
      <line x1="1" y1="1" x2="9" y2="9" />
      <line x1="9" y1="1" x2="1" y2="9" />
    </svg>`;

  li.append(nameSpan, removeBtn);
  guestList.append(li);
  count += 1;
  guestCount.textContent = `Total Guest : ${count}`;
};

btnAdd.addEventListener("click", () => {
  addList();
  addInput.value = "";
});

addInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addList();
    addInput.value = "";
  }
});

guestList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");
  if (!removeBtn) return;

  removeBtn.closest("li").remove();
  count -= 1;
  guestCount.textContent = `Total Guest : ${count}`;
});
