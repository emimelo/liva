import { errorValidation, successValidation } from "./messageValidation.js";

const name = document.getElementById("nome");
const phone = document.getElementById("telefone");
const email = document.getElementById("email");
const message = document.getElementById("mensagem");

export function validators() {
  let status = true;

  const nameValue = name.value.trim();
  const telValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameValue.length < 3 ? errorValidation(name) : successValidation(name);

  messageValue === "" ? errorValidation(message) : successValidation(message);

  if (nameValue.length < 3) {
    errorValidation(name);
    status = false;
  } else {
    successValidation(name);
  }

  if (messageValue === "") {
    errorValidation(message);
    status = false;
  } else {
    successValidation(message);
  }

  if (telValue === "") {
    errorValidation(
      phone,
      "*O Telefone deve ter o seguinte formato: '(xx) xxxxx-xxxx'"
    );
    status = false;
  } else {
    successValidation(phone);
  }

  if (!emailRegex.test(emailValue)) {
    errorValidation(email);
    status = false;
  } else {
    successValidation(email);
  }

  return status;
}
