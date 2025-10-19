//  1.
// const yourName = prompt("What is your name?", "Typing your name...")
// console.log(yourName)
// let nameConfirm = null
// if (yourName?.trim().length !== 0 && yourName?.trim() !== null) {
//     nameConfirm = confirm(`Are you ${yourName}?`)
// }
// nameConfirm ? alert(`Hello, ${yourName}`) : alert(`Hello, Guest`)


//  2.
//const submitButton = document.querySelector("div>button")
// console.log(submitButton)

// 2.1
//1. add event with annonymous handle function
// submitButton.addEventListener("click", () => {
//   console.log("Submit button was clicked!")
// })
// submitButton.removeEventListener("click", () => {
//   console.log("Submit button was clicked!")
// }) //does not work

//  2.2
//2. add event with named function
// const handlerButton = () => {
//   console.log("Submit button was clicked!")
// }
// submitButton.addEventListener("click", handlerButton)
// submitButton.removeEventListener("click", handlerButton)

// const submitButton = document.querySelector("button")

//  3.
// submitButton.addEventListener("click", (event) => {
//     console.log(event.eventPhase)
//     console.log("Submit button was clicked!")
// })

// const divElement = document.querySelector("div")
// divElement.addEventListener("click", (event) => {
//     console.log(event.eventPhase)
//     console.log("Div was clicked!")
// })

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener("click", (event) => {
//     console.log(event.eventPhase)
//     console.log("Body was clicked!")
// })

//  4.
// const aLink = document.querySelector("a")
// aLink.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("Web visit")
// })

// const fName = document.getElementById("fname")
// const lName = document.getElementById("lname")
// const message = document.getElementById("message")

//  5. 
// function checkEmpty(e) {
//     console.log(e)
//     if (e.target.value.trim().length === 0) {
//         message.style.color = "red"
//         message.textContent = `your ${e.target.id} is empty`
//     }
// }
// fName.addEventListener("blur", checkEmpty)
// lName.addEventListener("blur", checkEmpty)

//  6. 
// const inputMessage = document.getElementById('message')
// inputMessage.addEventListener('keyup', (event) => {
//     console.log(event.key)
//     console.log(event.code)
// })

//  7.
// const message = document.querySelector("#message")
// const display = document.querySelector("p")
// message.addEventListener("input", function() {
//     console.log("input handler function is working...")
// })