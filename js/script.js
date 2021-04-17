/* Function to access the navigation menu when the hamburger is clicked */
const hamburger = document.querySelector('header i')
const navMenu = document.querySelector('header ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-times-circle')
    navMenu.classList.toggle('show')
})