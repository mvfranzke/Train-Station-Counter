/* let lap1 = 34
let lap2 = 22
let lap3 = 45

let SumofLaps = lap1 + lap2 + lap3

function OtherSum() {
  let sum = lap1 + lap2 + lap3
  console.log(sum)  
}

console.log(SumofLaps)
OtherSum()
 */
/* 
let lapsCompleted = 0

function Increment() {
  lapsCompleted++
  
}

Increment()

console.log(lapsCompleted);
 */

/* let count = 0
let  countEl = document.getElementById("count-el")

function increment ()
  {
      count++
      countEl.innerText = count
      
  }

function save() {
  console.log(count)
}
 */
/* let name = 42
let greeting = "Hi, my name is "
let myGreeting =  greeting + name

console.log(myGreeting)


let welcomeEl = document.getElementById("welcome-el")
let name = "Michelle "
let greeting = "Welcome back"

welcomeEl.innerText= name + greeting

welcomeEl.innerText += "📧";
 */

let count = 0 // sets count to 0
let countEl = document.getElementById("count-el") //representation of the specific ID name of an element in HTML, H2
let saveEl = document.getElementById("save-el") // p

//creates increment function, so when increment button is clicked, it will add +1 to the count
function increment() {
  count++ // shortchut for count = count + 1
  countEl.textContent = count // returns or types the value of count inside the H2 element
}

//save function, so when save button is clicked, it will take the current count number and save it on p element
function save() {
  let entries = count + "-"  //shows current count with dash sign right next to the text Previous Entries
  saveEl.textContent += entries // keeps adding or appending the saved count so it doesnt delete the previous saved data
  count = 0 // so when we click save, the count reverts back to zero instead of rememberingn the last count 
  countEl.textContent= count // shows 0 in H2
}


