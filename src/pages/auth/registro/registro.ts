import type { IUser } from "../../../types/IUser";

const form = document.getElementById("registerForm") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Obtener usuarios existentes
  const users: IUser[] = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  // Validar usuario duplicado
  const exists = users.some((user) => user.email === email);
  if (exists) {
    alert("El usuario ya existe");
    return;
  }

  const newUser: IUser = {
    email,
    password,
    role: "client", // rol por defecto
    loggedIn: false,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Usuario registrado correctamente");

  window.location.href = "/src/pages/auth/login/login.html";
});