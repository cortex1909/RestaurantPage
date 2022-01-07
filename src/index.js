import './css/style.css'
import { switchHome, switchMenu, switchContact } from './js/navbar'
import homePage from './js/home'

let navbarListener = () => {
    const homeButton = document.getElementById('home')
    const menuButton = document.getElementById('menu')
    const contactButton = document.getElementById('contact')
    
    homeButton.addEventListener('click', switchHome)
    menuButton.addEventListener('click', switchMenu)
    contactButton.addEventListener('click', switchContact)
}

let initialization = () => {
    navbarListener()
    homePage()
}

initialization()