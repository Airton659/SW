const changeThemeBtn = document.querySelector("#change-theme");
const root = document.querySelector("html");
const themeSystem = localStorage.getItem('themeSystem') || 'light'


/*Função para alterar o tema*/
function toggleDarkMode (theme) {
    root.classList.toggle("dark-mode");   
}

/*carregando o tema*/
changeThemeBtn.addEventListener("change",function() {
    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"

    localStorage.setItem("themeSystem",newTheme)
    toggleDarkMode(newTheme);
// 
})

toggleDarkMode(themeSystem)