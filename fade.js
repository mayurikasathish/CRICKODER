// fade.js
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

function fadeNavigate(url) {
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 600); // match CSS
}
