const names = ["ANTONIO", "JOAO", "MARIA", "CESAR", "VITORIA"]
const animals = ["DOG", "CAT", "PARROT", "ELEPHANT", "TIGER"]
const countries = ["BRAZIL", "DENMARK", "ARGENTINA", "FRANCE"]
const foods = ["AVOCADO", "BANANA", "MEAT", "PINEAPPLE"]

const p_sNAMES = document.getElementById("names")
const p_sANIMALS = document.getElementById("animals")
const p_sCOUNTRIES = document.getElementById("countries")
const p_sFOOD = document.getElementById("foods")
const gameHappens = document.getElementById("letters")

const urls = ['https://i.ibb.co/0FfTdWS/HANG1-removebg-preview.png','https://i.ibb.co/pJcmD8J/HANG2-removebg-preview.png','https://i.ibb.co/6P6MZCH/HANG3-removebg-preview.png','https://i.ibb.co/VSYZpw0/HANG4-removebg-preview.png','https://i.ibb.co/vv9RdJ3/HANG5-removebg-preview.png','https://i.ibb.co/hyH93V6/HANG6-removebg-preview.png','https://i.ibb.co/Dgzg6pM/LOSS-removebg-preview.png']

const buttonCheck = document.getElementById("check")
const buttonReset = document.getElementById("reset")
const optns = document.getElementById("options")

buttonCheck.disabled = true
buttonReset.disabled = true
optns.disabled = true


function name() {
    buttonCheck.disabled = false
    buttonReset.disabled = false
    optns.disabled = false
    p_sNAMES.disabled = "true"
    p_sANIMALS.disabled = "true"
    p_sCOUNTRIES.disabled = "true"
    p_sFOOD.disabled = "true"
    const randomNumber = Math.floor(Math.random()*4)
    const selectedName = names[randomNumber]
    const split  = selectedName.split("")
    console.log(split)
const newDiv = []
    for(let i = 0;i < split.length; i ++){
        newDiv[i] = document.createElement("div")
        newDiv[i].innerText = split[i]
        newDiv[i].setAttribute("id","spans")
        newDiv[i].style.color= "rgba(0,0,0,0)"
        newDiv[i].style.borderBottom= "3px solid #000"
        letters.appendChild(newDiv[i])
    }
    let typeWord = document.createElement("p")
    typeWord.innerText = "Name"
    typeWord.setAttribute("id","right p")
    right.appendChild(typeWord)
}


function animal() {
    buttonCheck.disabled = false
    buttonReset.disabled = false
    optns.disabled = false
    p_sNAMES.disabled = "true"
    p_sANIMALS.disabled = "true"
    p_sCOUNTRIES.disabled = "true"
    p_sFOOD.disabled = "true"
    const randomNumber = Math.floor(Math.random()*4)
    const selectedAnimal = animals[randomNumber]
    const split  = selectedAnimal.split("")
    console.log(split)
const newDiv = []
    for(let i = 0;i < split.length; i ++){
        newDiv[i] = document.createElement("div")
        newDiv[i].innerText = split[i]
        newDiv[i].setAttribute("id","spans")
        newDiv[i].style.color= "rgba(0,0,0,0)"
        newDiv[i].style.borderBottom= "3px solid #000"
        letters.appendChild(newDiv[i])
    }
    let typeWord = document.createElement("p")
    typeWord.innerText = "Animal"
    typeWord.setAttribute("id","right p")
    right.appendChild(typeWord)
}

function country() {
    buttonCheck.disabled = false
    buttonReset.disabled = false
    optns.disabled = false
    p_sNAMES.disabled = "true"
    p_sANIMALS.disabled = "true"
    p_sCOUNTRIES.disabled = "true"
    p_sFOOD.disabled = "true"
    const randomNumber = Math.floor(Math.random()*4)
    const selectedCountry = countries[randomNumber]
    const split  = selectedCountry.split("")
    console.log(split)
const newDiv = []
    for(let i = 0;i < split.length; i ++){
        newDiv[i] = document.createElement("div")
        newDiv[i].innerText = split[i]
        newDiv[i].setAttribute("id","spans")
        newDiv[i].style.color= "rgba(0,0,0,0)"
        newDiv[i].style.borderBottom= "3px solid #000"
        letters.appendChild(newDiv[i])
    }
    let typeWord = document.createElement("p")
    typeWord.innerText = "Country"
    typeWord.setAttribute("id","right p")
    right.appendChild(typeWord)
}

function food() {
    buttonCheck.disabled = false
    buttonReset.disabled = false
    optns.disabled = false
    p_sNAMES.disabled = "true"
    p_sANIMALS.disabled = "true"
    p_sCOUNTRIES.disabled = "true"
    p_sFOOD.disabled = "true"
    const randomNumber = Math.floor(Math.random()*4)
    const selectedFood = foods[randomNumber]
    const split  = selectedFood.split("")
    console.log(split)
const newDiv = []
    for(let i = 0;i < split.length; i ++){
        newDiv[i] = document.createElement("div")
        newDiv[i].innerText = split[i]
        newDiv[i].setAttribute("id","spans")
        newDiv[i].style.color= "rgba(0,0,0,0)"
        newDiv[i].style.borderBottom= "3px solid #000"
        letters.appendChild(newDiv[i])
    }
    let typeWord = document.createElement("p")
    typeWord.innerText = "Food"
    typeWord.setAttribute("id","right p")
    right.appendChild(typeWord)
}


const namesTrig = document.getElementById('names');  
namesTrig.addEventListener('click', name);

const animalsTrig = document.getElementById('animals');  
animalsTrig.addEventListener('click',animal);

const countriesTrig = document.getElementById('countries');  
countriesTrig.addEventListener('click',country);

const foodsTrig = document.getElementById('foods');  
foodsTrig.addEventListener('click',food);

let sum1 = 0;
let sum2 = 0;
let urlImg = document.getElementById('img2')

buttonCheck.addEventListener('click', function() {
for(let i = 0;i < optns.length;i++) {
    if (optns.value === optns[i].innerHTML) {
        optns[i].disabled = true
        optns[i].style.color = 'red'
    }
}

const set = document.querySelectorAll("#spans")
for(let i = 0;i < set.length;i ++) {
    if (optns.value === set[i].innerHTML) {
        set[i].style.color = "black"
        sum1 = sum1 + 1  
    } 
}

if(sum1 === 0) {
    sum2 = sum2 + 1
}

urlImg.src = urls[sum2]

if(sum2 === 6){
    for(let i = 0; i < set.length; i++){
        set[i].style.color = "red"
    }
    buttonCheck.disabled = true
    optns.disabled = true
}
sum1 = 0;
sum3 = 0;
for(let i = 0;i < set.length;i ++){
    if (set[i].style.color === "black" ) {
        sum3 = sum3 + 1
    }
}

if (sum3 === set.length) {
    urlImg.src = 'https://i.ibb.co/2YkF8PN/WIN-removebg-preview-3.png'
    for(let i = 0;i < set.length;i ++){
        set[i].style.color = "green"
    }
    buttonCheck.disabled = true
    optns.disabled = true
}

})

