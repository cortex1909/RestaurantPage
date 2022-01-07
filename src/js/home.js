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

let workingTimeContainer = () => {
	const element = document.createElement('div')
	element.classList.add('workingTime')

	const h1 = document.createElement('h2')
	h1.innerHTML = 'Working Time'
	const ul = document.createElement('ul')
	ul.innerHTML = `<li><strong>Monday:</strong> not working</li>
    <li><strong>Tuesday:</strong> 16.00 - 00.00</li>
    <li><strong>Wednesday:</strong> 16.00 - 00.00</li>
    <li><strong>Thrusday:</strong> 16.00 - 00.00</li>
    <li><strong>Friday:</strong> 14.00 - 02.00</li>
    <li><strong>Saturday:</strong> 14.00 - 02.00</li>
    <li><strong>Sunday:</strong> 12.00 - 00.00</li>`

	element.appendChild(h1)
	element.appendChild(ul)
	return element
}

let locationContainer = () => {
	const element = document.createElement('div')
	element.classList.add('location')

	const h2 = document.createElement('h2')
	h2.innerHTML = 'Restaurant location'
	const p = document.createElement('p')
	p.innerHTML = '23 Oliver Ln, Melbourne VIC 3000, Australia'
	element.appendChild(h2)
	element.appendChild(p)

	return element
}

let homePage = () => {
	const content = document.getElementById('content')
	const _titleContainer = titleContainer()
	const _workingTimeContainer = workingTimeContainer()
	const _locationContainer = locationContainer()
	content.appendChild(_titleContainer)
	content.appendChild(_workingTimeContainer)
	content.appendChild(_locationContainer)
}

export default homePage
