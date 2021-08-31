
document.getElementById("home").addEventListener("click", () => location.href = "../index.html");

const reset = document.createElement("button");
const resultado = document.createElement("p");
resultado.classList.add("resultado");
const resultContainer = document.querySelector(".result-container");
const gridContainer = document.querySelector(".grid-container");
const childs = gridContainer.children;

let numberHuman = [];
let numberComputer = [];
let contador = 0;

var stop = false;

reset.addEventListener("click", () => location.reload());

for (let i = 0; i < childs.length; i++) {
    childs[i].addEventListener("click", () => {
        if (stop == false) {
            childs[i].innerHTML = "0";
            childs[i].style.backgroundColor = "#00f";
            childs[i].style.color = "white";
            childs[i].style.fontSize = "60px";
            childs[i].style.fontWeight = "bold";
            childs[i].style.textAlign = "center";
            childs[i].style.lineHeight = "100px";
            childs[i].style.cursor = "default";
            childs[i].style.pointerEvents = "none";
            numberHuman.push(i);
            contador++;
            run();
        }
    });
}

const run = () => {
    if (!winHuman()) {
        bot();
        if (winComputer()) {
            resultado.innerHTML = "Perdiste! Intentalo de nuevo.";
            resultado.style.color = "#f00";
            resultContainer.appendChild(resultado);
            resultContainer.appendChild(reset);
            reset.style.color = "#800";
            reset.innerHTML = "Reintentar";
            stop = true;
        }
        if (contador == 9) {
            resultado.innerHTML = "Empate! Intentalo de nuevo.";
            resultado.style.color = "#000";
            resultContainer.appendChild(resultado);
            resultContainer.appendChild(reset);
            reset.style.color = "#000";
            reset.innerHTML = "Reintentar";
            stop = true;
        }
    } else {
        resultado.innerHTML = "Ganaste! Felicidades.";
        resultado.style.color = "#0d0";
        resultContainer.appendChild(resultado);
        resultContainer.appendChild(reset);
        reset.style.color = "#080";
        reset.innerHTML = "Juega Otra vez";
        stop = true;
    }
}


const winHuman = () => {
    if (numberHuman.includes(0) && numberHuman.includes(1) && numberHuman.includes(2)) return true;
    if (numberHuman.includes(3) && numberHuman.includes(4) && numberHuman.includes(5)) return true;
    if (numberHuman.includes(6) && numberHuman.includes(7) && numberHuman.includes(8)) return true;
    if (numberHuman.includes(0) && numberHuman.includes(3) && numberHuman.includes(6)) return true;
    if (numberHuman.includes(1) && numberHuman.includes(4) && numberHuman.includes(7)) return true;
    if (numberHuman.includes(2) && numberHuman.includes(5) && numberHuman.includes(8)) return true;
    if (numberHuman.includes(0) && numberHuman.includes(4) && numberHuman.includes(8)) return true;
    if (numberHuman.includes(2) && numberHuman.includes(4) && numberHuman.includes(6)) return true;
    return false;
}

const winComputer = () => {
    if (numberComputer.includes(0) && numberComputer.includes(1) && numberComputer.includes(2)) return true;
    if (numberComputer.includes(3) && numberComputer.includes(4) && numberComputer.includes(5)) return true;
    if (numberComputer.includes(6) && numberComputer.includes(7) && numberComputer.includes(8)) return true;
    if (numberComputer.includes(0) && numberComputer.includes(3) && numberComputer.includes(6)) return true;
    if (numberComputer.includes(1) && numberComputer.includes(4) && numberComputer.includes(7)) return true;
    if (numberComputer.includes(2) && numberComputer.includes(5) && numberComputer.includes(8)) return true;
    if (numberComputer.includes(0) && numberComputer.includes(4) && numberComputer.includes(8)) return true;
    if (numberComputer.includes(2) && numberComputer.includes(4) && numberComputer.includes(6)) return true;
    return false;
}

const bot = () => {
    if (numberHuman.length < 5) {
        let random = Math.floor(Math.random() * 9);
        while (childs[random].innerHTML != "") {
            random = Math.floor(Math.random() * 9);
        }
        childs[random].innerHTML = "X";
        childs[random].style.backgroundColor = "#f00";
        childs[random].style.color = "white";
        childs[random].style.fontSize = "60px";
        childs[random].style.fontWeight = "bold";
        childs[random].style.textAlign = "center";
        childs[random].style.lineHeight = "100px";
        childs[random].style.cursor = "default";
        childs[random].style.pointerEvents = "none";
        numberComputer.push(random);
        contador++;
    }
}