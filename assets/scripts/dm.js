const changeThemeBtn = document.querySelector("#change-theme")
const root = document.querySelector("html");

changeThemeBtn.addEventListener("change",function() {
    root.classList.toggle("dark-mode");
})