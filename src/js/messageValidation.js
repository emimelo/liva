export function errorValidation(input, message) {
  const containerInput = input.parentElement;
  const span = containerInput.querySelector(".span-errors");

  containerInput.className = "container-input error";

  if (message) {
    span.innerText = message;
  }
}

export function successValidation(input) {
  const containerInput = input.parentElement;
  containerInput.className = "container-input success";
}
