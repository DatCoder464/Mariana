let greetInputEl;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");

  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    location.href = greetInputEl.value;
  });
});
