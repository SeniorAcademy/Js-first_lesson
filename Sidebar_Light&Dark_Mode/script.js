document.addEventListener("DOMContentLoaded", () =>{
  const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggleBtn = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");





toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");

});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Dark Mode";
   
  }
   else {
    modeText.innerText = "Light Mode";
 
  }
  // const tezeMode = body.classList.contains("dark") ? "light" : "dark"
  // setMode(tezeMode)
});
})


