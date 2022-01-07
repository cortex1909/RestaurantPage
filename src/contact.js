let titleContainer = () => {
    const element = document.createElement('div')
    element.classList.add('titleContainer')

    const leftContainer = document.createElement('div')
    leftContainer.classList.add('leftContainer')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Cortex'
    const p = document.createElement('p')
    p.innerHTML = 'restaurant website'
    leftContainer.appendChild(h1)
    leftContainer.appendChild(p)

    const rightContainer = document.createElement('div')
    rightContainer.classList.add('rightContainer')
    rightContainer.innerHTML = `<p>Open day by day for lunch and dinner, <strong>Cortex <em>restaurant</em></strong> offers a choice of naturally arranged things utilizing just the best fixings accessible. Top picks incorporate Certified Angus Beef®, crisp fish, rotisserie chicken, infant back pork ribs.</p>`


    element.appendChild(leftContainer)
    element.appendChild(rightContainer)
    return element
}

let contactForm = () => {
    const location = document.createElement('div')
    location.classList.add('location')
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Restaurant location'
    const iFrame = document.createElement('iframe')
    iFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8916251973565!2d144.96770721531882!3d-37.816007379751966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b7c9c74557%3A0xf9ad2f12698ba821!2s23%20Oliver%20Ln%2C%20Melbourne%20VIC%203000%2C%20Australija!5e0!3m2!1shr!2shr!4v1641548863234!5m2!1shr!2shr'
    iFrame.width = 800
    iFrame.height = 600
    const phone = document.createElement('p')
    phone.innerHTML = `<strong>PHONE NUMBER:</strong> +123 / 456 - 789`

    location.appendChild(h2)
    location.appendChild(iFrame)
    location.appendChild(phone)
    return location
}

let contactPage = () => {
    const content = document.getElementById('content')
    const _titleContainer = titleContainer()
    const _contactForm = contactForm()
    content.appendChild(_titleContainer)
    content.appendChild(_contactForm)
}

export default contactPage