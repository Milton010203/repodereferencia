import type { IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("loginForm") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const users: IUser[] = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Email o contraseña incorrectos");
    return;
  }

  // guardamos sesión
  localStorage.setItem("userData", JSON.stringify(user));

  // redirigir según rol
  if (user.role === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else {
    navigate("/src/pages/client/home/home.html");
  }
});
