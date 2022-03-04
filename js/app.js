const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn")

mobileMenuBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', hideMenu)

function showMenu() {
    console.log('open click')
    mobileMenu.style.display = 'flex';
    mobileMenu.style.height = '100vh'
}

function hideMenu() {
    console.log('closed click')
    mobileMenu.style.display = 'none'
    mobileMenu.style.height = 0;
}