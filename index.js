let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let count = 0

let messageEl = document.getElementById("message-el")
let message2El = document.getElementById("message2-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let creditEl = document.getElementById("credit-el")

let player = {
    name: "Player",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {

    creditEl.style.marginTop = "495px";
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if (sum != 21) {
        hasBlackJack = false
    }
    renderGame()
    message2El.textContent = ""
}


function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    } else if (isAlive === false) {
        creditEl.style.marginTop = "42%";
        message2El.textContent = "You can't play anymore !"
    
    }
}

