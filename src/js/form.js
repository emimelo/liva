import { errorValidation, successValidation } from "./messageValidation.js";

const name = document.getElementById("nome");
const phone = document.getElementById("telefone");
const email = document.getElementById("email");
const message = document.getElementById("mensagem");

export function validators() {
  const nameValue = name.value.trim();
  const telValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRegex = /^\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;

  nameValue.length < 3 ? errorValidation(name) : successValidation(name);

  messageValue === "" ? errorValidation(message) : successValidation(message);

  !telRegex.test(telValue)
    ? errorValidation(
      phone,
      "O Telefone deve ter o seguinte formato: '(xx) xxxxx-xxxx'"
    )
    : successValidation(phone);

  !emailRegex.test(emailValue)
    ? errorValidation(email)
    : successValidation(email);
}
