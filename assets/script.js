function toggleTheme() {
    const body = document.body;
    const darkModeIcon = document.getElementById("dark1");
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains("dark-mode");
    darkModeIcon.style.visibility = isDarkMode ? 'visible' : 'visible';
    darkModeIcon.style.opacity = isDarkMode ? 1 : 1;
}
function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}