// JavaScript Vanilla

// Aquí está todo el DOM

const contenedor = document.getElementById("terminar");
const resultado = document.createElement("p");
resultado.classList.add("resultado")
const reset = document.createElement("button");
reset.textContent = "Volver a jugar";
reset.setAttribute("id", "reset");
let input = document.getElementById("respuesta");
const home = document.getElementById("home").addEventListener("click", () => location.href = "..");

// Reiniciar la pagina

reset.addEventListener("click", resetear = () => {
    location.reload();
})

const enviarRespuesta = document.getElementById("enviar");
let ganar = 0;

// Genera un número aleatorio

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let contador = 0;

// Si le das a enviar respuesta se ejecute el programa

enviarRespuesta.addEventListener("click", hacerResultado);

// Si le das al enter se ejecute el programa

input.addEventListener("keypress", (e) => {
    let teclaPulsada = e.key;
    if (teclaPulsada == "Enter") {
        if (ganar == 0) {
            hacerResultado();
        } else {
            resetear();
        }
    }
});

// Función del programa

function hacerResultado() {
    const respuesta = document.getElementById("respuesta").value;
    if (contador < 10) {
        if (respuesta == numeroAleatorio) {
            resultado.textContent = "¡Acertaste! Bien hecho";
            resultado.style.color = "#0d0";
            contenedor.appendChild(resultado);
            contenedor.appendChild(reset);
            ganar = 1;
        }
        else if (respuesta != numeroAleatorio && ganar == 0) {
            if (respuesta < numeroAleatorio) {
                resultado.textContent = "El número es demasiado bajo";
                resultado.style.color = "#f00";
                contenedor.appendChild(resultado);
            }
            else if (respuesta > numeroAleatorio) {
                resultado.textContent = "El número es demasiado alto";
                resultado.style.color = "#f00";
                contenedor.appendChild(resultado);
            }
            contador++;
        }
        if (contador == 10) {
            resultado.textContent = "Fallaste los 10 intentos pero puedes volver a jugar";
            resultado.style.color = "#f00";
            contenedor.appendChild(resultado);
            contenedor.appendChild(reset);
            ganar = 1;
        }
    }
}