// Variable
let dateEl = document.querySelector("input");
let calculateBtn = document.querySelector("button");
let resultEl = document.querySelector("p");

// logic

function calculateAge() {
  userAge = dateEl.value.split("-");
  calAge = 2026 - Number(userAge[0]);
  resultEl.innerHTML = `your age is ${calAge} years old.`;
}

// addeventlistner

calculateBtn.addEventListener("click", calculateAge);
