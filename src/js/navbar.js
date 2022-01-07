import homePage from './home'
import menuPage from './menu'
import contactPage from './contact'

const emptyContent = () => {
  const content = document.getElementById('content')
  content.innerHTML = ''
}

export const switchHome = () => {
  emptyContent()
  homePage()
}

export const switchMenu = () => {
  emptyContent()
  menuPage()
}

export const switchContact = () => {
  emptyContent()
  contactPage()
}
