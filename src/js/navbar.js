import homePage from './home'
import menuPage from './menu'
import contactPage from './contact'

export let switchHome = () => {
	emptyContent()
	homePage()
}

export let switchMenu = () => {
	emptyContent()
	menuPage()
}

export let switchContact = () => {
	emptyContent()
	contactPage()
}

let emptyContent = () => {
	const content = document.getElementById('content')
	content.innerHTML = ''
}
