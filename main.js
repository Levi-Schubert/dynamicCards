//create cards
const ref = document.querySelector("#card__box")

function clearField(){
	let input = document.querySelector("#textInput")

	input.value = ""
}

const printCard = (frag) => {
	
	ref.appendChild(frag)
}

let current = 1

const deleteCard = (e) =>{
	console.log(e)
	ref.removeChild(e.path[1])
}

const createNewListener = (cardId) =>{
	const cardEvent = document.querySelector(cardId).addEventListener("click", deleteCard)
}


const newCard = () => {
	let input = document.querySelector("#textInput").value
	let fragment = document.createDocumentFragment()

	//build card
	const card = document.createElement("section")
	card.classList = "card"
	card.id = ("card--" + current)

	const text = document.createElement("h2")
	text.textContent = input
	card.appendChild(text)

	const del = document.createElement("button")
	del.id = ("delete--" + current)
	del.textContent = "delete this card"
	card.appendChild(del)

	fragment.appendChild(card)

	
	clearField()
	printCard(fragment)
	createNewListener("#" + del.id)
	current += 1
}



const createCard = document.querySelector("#createCard").addEventListener('click', newCard)
