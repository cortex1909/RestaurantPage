import './css/style.css'
import Logo from './img/logo.png'
import { switchHome, switchMenu, switchContact } from './js/navbar'
import homePage from './js/home'

let placeLogo = () => {
	const logo = document.getElementById('Logo')
	logo.src = Logo
}

let navbarListener = () => {
	const homeButton = document.getElementById('home')
	const menuButton = document.getElementById('menu')
	const contactButton = document.getElementById('contact')

	homeButton.addEventListener('click', switchHome)
	menuButton.addEventListener('click', switchMenu)
	contactButton.addEventListener('click', switchContact)
}

let initialization = () => {
	placeLogo()
	navbarListener()
	homePage()
}

initialization()
