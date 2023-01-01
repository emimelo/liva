import { errorValidation, successValidation } from "./messageValidation.js";

const name = document.getElementById("nomeDesk");
const phone = document.getElementById("telefoneDesk");
const email = document.getElementById("emailDesk");
const message = document.getElementById("mensagemDesk");

export function validatorsDesk() {
  let status = true;

  const nameValue = name.value.trim();
  const telValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
