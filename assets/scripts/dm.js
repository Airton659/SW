const changeThemeBtn = document.querySelector("#change-theme");
const root = document.querySelector("html");
const themeSystem = localStorage.getItem('themeSystem')

//verifica o tema atual
function loadTheme(theme) {
    if (theme == "dark"){
        //adiciona a classe "dark-mode" ao HTML
        root.classList.add("dark-mode")
    }
    else
    {
        //qualquer coisa diferente de dark é transformado em light
        localStorage.setItem("themeSystem","light")
    }
}


loadTheme(themeSystem);


// function toggleDarkMode (theme) {
//     root.classList.toggle("dark-mode");
// }

changeThemeBtn.addEventListener("change",function() {
    let tema = localStorage.getItem('themeSystem')
    
    if (tema == "light") {
        localStorage.setItem("themeSystem", "dark")
        root.classList.toggle("dark-mode");
    }
    else
    {
        localStorage.setItem("themeSystem", "light")
        root.classList.toggle("dark-mode");
    }
})