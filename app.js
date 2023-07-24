/* Created by Tivotal */

let toggleBtn = document.querySelector(".toggler a");
let container = document.querySelector(".container");
let title = document.querySelector(".title");
let btn = document.querySelector(".btn");
let toggler = document.querySelector(".toggler");

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("signup");

  if (container.classList.contains("signup")) {
    title.textContent = "Sign Up";
    btn.value = "Signup";
    toggler.innerHTML = `Already have an account? <a href="">Login Here</a>`;
  }
});
