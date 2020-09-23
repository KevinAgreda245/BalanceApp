/**
 * Constante que contiene los elementos HTML
 */
const body = document.querySelector("body")
const cbxModo = document.getElementById('cbxModo');
const lblCalories = document.getElementById('numberCalories');
const btns = document.querySelectorAll("section button")

/**
 * Contador de las calorías
 */
let calories = 0;

/**
 * Se recorre cada botón para asignale el evento click
 */
Array.from(btns).forEach( btn =>{
    btn.addEventListener("click",()=>{
        countCalories(btn);
    })
})

/**
 * Evento del checkbox para activar/desactivar el modo oscuro
 */
cbxModo.addEventListener("click",() => {
    body.classList.toggle("darkMode");
})

/**
 * Método para llevar el control de caloría 
 * @param {*} element es el botón al que se dio click
 */
function countCalories (element) {
    if (element.className.includes("no-active")){
        element.className = "active";
        sumCalories(parseInt(element.value));
    } else {
        element.className = "no-active";
        restCalories(parseInt(element.value));
    }
    lblCalories.innerHTML = calories;
}

/**
 * Método para sumar las calorías 
 * @param {*} number es la cantidad a sumar
 */
function sumCalories (number) {
    calories += number;    
}

/**
 * Método para restar las calorías
 * @param {*} number es el cantidad a restar
 */
function restCalories (number) {
    calories -= number;
    if (calories < 0)
        calories = 0;
}