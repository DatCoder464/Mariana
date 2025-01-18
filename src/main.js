let greetInputEl;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#search-input");

  document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    location.href = greetInputEl.value;
  });
});
