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

let menuList = () => {
    const element = document.createElement('div')
    element.classList.add('menuList')

    food.forEach(foodies => {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')
        const h2 = document.createElement('h2')
        h2.innerHTML = foodies.name
        const imgDiv = document.createElement('div')
        imgDiv.classList.add('img')
        const img = document.createElement('img')
        img.src = foodies.img
        const info = document.createElement('div')
        info.classList.add('info')
        info.innerHTML = foodies.info
        const price = document.createElement('div')
        price.classList.add('price')
        price.innerHTML = foodies.price

        menuItem.appendChild(h2)
        menuItem.appendChild(imgDiv)
        imgDiv.appendChild(img)
        menuItem.appendChild(info)
        menuItem.appendChild(price)
        element.appendChild(menuItem)
    })
    return element
}

let menuPage = () => {
    const content = document.getElementById('content')
    const _titleContainer = titleContainer()
    const _menuList = menuList()
    content.appendChild(_titleContainer)
    content.appendChild(_menuList)
}

const food = [
    {
        name: 'Pizza',
        img: '../src/img/pizza.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '10,99 &dollar;'
    },
    {
        name: 'Lasagne',
        img: '../src/img/2.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '19,99 &dollar;'
    },
    {
        name: 'Pasta',
        img: '../src/img/3.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '15,99 &dollar;'
    },
    {
        name: 'Berries',
        img: '../src/img/4.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '9,99 &dollar;'
    },
    {
        name: 'Shells',
        img: '../src/img/5.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '39,99 &dollar;'
    },
    {
        name: 'Pie',
        img: '../src/img/6.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.',
        price: '1,99 &dollar;'
    },
]

export default menuPage