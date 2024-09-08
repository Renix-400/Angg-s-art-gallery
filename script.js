window.addEventListener("scroll", function () {
  var videoBackground = document.querySelector(".video-background");
  if (window.scrollY > 100) {
    videoBackground.style.display = "none";
  } else {
    videoBackground.style.display = "block";
  }
});
function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("open");
}
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".menu-button");

  // Check if the click was outside the sidebar and button
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
