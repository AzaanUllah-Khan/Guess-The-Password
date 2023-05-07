
var main = document.getElementById("shown")
var click = document.getElementById("hidden")
function up() {
    click.style.display = "none"
    main.style.bottom = '10px'
    document.getElementById("time").style.display = "none"
}
function down() {
    click.style.display = "block"
    main.style.bottom = '-100%'
    document.getElementById("time").style.display = "block"
}
var o = Math.floor(Math.random() * 9).toString()
var t = Math.floor(Math.random() * 9).toString()
var f = Math.floor(Math.random() * 9).toString()
var fi = Math.floor(Math.random() * 9).toString()
var random = o + t + f + fi
var password = random
console.log(password);
var input = document.getElementById("inp")
function one() {
    if (input.value.length < 4) {
        input.value += "1"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function two() {
    if (input.value.length < 4) {
        input.value += "2"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function three() {
    if (input.value.length < 4) {
        input.value += "3"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function four() {
    if (input.value.length < 4) {
        input.value += "4"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function five() {
    if (input.value.length < 4) {
        input.value += "5"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function six() {
    if (input.value.length < 4) {
        input.value += "6"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function seven() {
    if (input.value.length < 4) {
        input.value += "7"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function eight() {
    if (input.value.length < 4) {
        input.value += "8"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function nine() {
    if (input.value.length < 4) {
        input.value += "9"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function zero() {
    if (input.value.length < 4) {
        input.value += "0"
    }
    else {
        alert("You can only enter 4 values")
    }
}
function check() {
    if (input.value == random) {
        alert("You Have Cracked the Password")
        alert("Game has been Restarted")
        location.reload()
    }
    else {
        input.value = ""
    }
}
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
function setting() {
    if (hour < 10) {
        document.getElementById("smallTime").innerHTML = `0${hour}:${min}`
        document.getElementById("time").innerHTML = `0${hour}:${min}`
    }
    else if (min < 10) {
        document.getElementById("smallTime").innerHTML = `${hour}:0${min}`
        document.getElementById("time").innerHTML = `${hour}:0${min}`
    }
    else {
        document.getElementById("smallTime").innerHTML = `${hour}:${min}`
        document.getElementById("time").innerHTML = `${hour}:${min}`
    }
}
setInterval(setting, 1000)       
