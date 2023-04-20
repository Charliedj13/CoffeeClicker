let buttonElement = document.getElementById("img");
let coffeeCount = document.getElementById("coffee");
let coffeee = document.getElementById("coffeee")
let frenchPress = document.getElementById("french");
let keurigMaker = document.getElementById("keurig");
let keurigButton = document.getElementById("keurig-maker")
let coffeeShop = document.getElementById("shop")
let coffeeShopButton = document.getElementById("coffeeshop");
let frenchButton = document.getElementById("french-button");

function myButtonsCallbackFunction () {
    console.log("The button was pressed")
}
buttonElement.addEventListener("click", myButtonsCallbackFunction)


let clickerCount = 0;
let coffeePerSecond = 0;
const frenchPerSecond = 1;
const KeurigPerSecond = 10;
const coffeeShopPerSecond = 25;
let numOfFrench = 0;
let numOfKeurig = 0;
let numOfCoffeeShop = 0;
let gameStarted = false

function changeTheCoffeeCounter () {
    console.log("Number was just added")
    clickerCount = clickerCount + 1;
}
buttonElement.addEventListener("click", changeTheCoffeeCounter)

function buyFrench () {
    if (clickerCount >= 50) {
        clickerCount = clickerCount - 50
        coffeePerSecond += 1
        coffeee.textContent = coffeePerSecond
    } else if (clickerCount < 50) {
        alert("Not Enough Cofffee")
    }
}
frenchButton.addEventListener("click", buyFrench)

window.addEventListener("click", function (){
    console.log(gameStarted)
    if (gameStarted == false) {
        setInterval(increaseCountPerSecond, 1000)
        gameStarted = true
    }
})
// When you try to buy anything, you want to check to see if I have enough coffee, if I do, subtract the cost of the producer from the coffee count. Then take however much per second that producer gives you and add that value to that coffee per second.
function increaseCountPerSecond () {
    clickerCount = clickerCount + coffeePerSecond
    coffeeCount.textContent = clickerCount;
}

function buyKeurig (){
    if (clickerCount >= 500) {
        clickerCount = clickerCount - 500
        coffeePerSecond += 10
        coffeee.textContent = coffeePerSecond
    } else if (clickerCount < 500) {
        alert("Not enough Coffee")
    }
}

keurigButton.addEventListener("click", buyKeurig)

function buyCoffeeShop (){
    if (clickerCount >= 5000) {
        clickerCount = clickerCount - 5000
        coffeePerSecond += 25 
        coffeee.textContent = coffeePerSecond
    } else if (clickerCount < 5000) {
        alert("Not enough Coffee")
    }
}
coffeeShopButton.addEventListener("click", buyCoffeeShop)

