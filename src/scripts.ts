import * as HtmlWebpackPlugin from "html-webpack-plugin"

const button1 = document.querySelector<HTMLButtonElement>(".js-button-1")
const button2 = document.querySelector<HTMLButtonElement>(".js-button-2")
const button3 = document.querySelector<HTMLButtonElement>(".js-button-3")
const button4 = document.querySelector<HTMLButtonElement>(".js-button-4")
const button5 = document.querySelector<HTMLButtonElement>(".js-button-5")
const button6 = document.querySelector<HTMLButtonElement>(".js-button-6")
const button7 = document.querySelector<HTMLButtonElement>(".js-button-7")

const box1 = document.querySelector<HTMLDivElement>(".js-box-1")
const box2 = document.querySelector<HTMLDivElement>(".js-box-2")
const box3 = document.querySelector<HTMLDivElement>(".js-box-3")
const box4 = document.querySelector<HTMLDivElement>(".js-box-4")
const box5 = document.querySelector<HTMLDivElement>(".js-box-5")
const box6 = document.querySelector<HTMLDivElement>(".js-box-6")

const allBoxes = document.querySelectorAll<HTMLDivElement>(".js-action-box")

const input = document.querySelector<HTMLInputElement>(".js-input")
const output = document.querySelector<HTMLParagraphElement>(".js-input-output")

const card = document.querySelector<HTMLDivElement>(".js-card")
const hidden = document.querySelector<HTMLDivElement>(".js-hidden")

button1.addEventListener('click', () => {
    box1.style.backgroundColor = "yellow"
})

button2.addEventListener('click', () => {
    box2.innerText = "SUCCESS"
})

button3.addEventListener('click', () => {
    box3.style.opacity = "0"
})

button4.addEventListener('click', () => {
    box4.classList.toggle('transparent')
})

const BOX5COLORS = ['rgb(147, 255, 51)', 'rgb(255, 187, 51)', 'rgb(88, 24, 69)', 'rgb(51, 255, 144)', 'rgb(172, 51, 255)']

const randomizeColor = (): string => {
    const index = Math.round(Math.random() * 4);
    return BOX5COLORS[index]
}   

const checkColor = (): string => {
    const newColor = randomizeColor()
    if (box5.style.backgroundColor == newColor) {
        return checkColor()
    } else {
        return newColor
    }
}

button5.addEventListener('click', () => {
    box5.style.backgroundColor = checkColor()
})

const counter = () => {
    let currentCount = +box6.innerText

    if (currentCount >= 10) {
        return false
    }
    
    box6.innerText = (currentCount + 1).toString()
    setTimeout(counter, 3000)
}

button6.addEventListener('click', () => {
    counter()
})

button7.addEventListener('click', () => {
    allBoxes.forEach(element => {
        element.style.backgroundColor = "#18D5E1"
    });
    card.style.backgroundColor = 'black'
})

box1.addEventListener('mouseover', () => {
    box1.style.backgroundColor = 'red'
})

const counterWithStop = () => {
    let currentCount = +box5.innerText

    if (hidden.innerText == 'stop') {
        hidden.innerText = 'go'
        box5.innerText = (0).toString()
        return false
    }

    if (!(currentCount >= 10)) {
        box5.innerText = (currentCount + 1).toString()
    }
    setTimeout(counterWithStop, 3000)
}

box5.addEventListener('mouseenter', () => {
    counterWithStop()
})

box5.addEventListener('mouseleave', () => {
    hidden.innerText = 'stop'
})

input.addEventListener('input', () => {
    output.innerText = input.value
})