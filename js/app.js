const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn")

mobileMenuBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', hideMenu)

function showMenu() {
    console.log('clicked!')
    mobileMenu.style.display = "flex"
    mobileMenu.style.height = "100vh"
}

function hideMenu() {
    mobileMenu.style.display = "none"
}