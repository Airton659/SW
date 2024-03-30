const storedTheme = localStorage.getItem("themeSystem")
const root = document.querySelector("html");

//Verifica o thema atual
function loadTheme(theme) {
    if (theme == "dark"){
        root.classList.add("dark-mode")
    }
    else
    {
        localStorage.setItem("themeSystem","light")
    }
}

loadTheme(storedTheme);