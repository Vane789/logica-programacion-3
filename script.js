const $btnFactorial = document.querySelector("#btn-calcular-factorial")
    .addEventListener("click", () => {
        calcularFactorial();
    })

function calcularFactorial() {
    const $factorial = parseInt(document.querySelector("#input-factorial").value);
    const $resultado = document.getElementById("resultado")
    const $error = document.getElementById("error")

    //resetear los valores
    $resultado.textContent = ""
    $error.textContent = ""
    $resultado.classList.remove("mostrarResultado")
    $error.classList.remove("mostrarError")


    if (!validarSiEsNumero($factorial)) {
        $error.classList.add("mostrarError")
        $error.textContent = "Debe de ser un número"
        return
    }

    if (parseInt($factorial) < 0) {
        $error.classList.add("mostrarError")
        $error.textContent = "No puede ser un número negativo"
        return
    }

    //Mostrar en el navegador el resultado
    const $div = document.createElement("div")
    const $p = document.createElement("p")

    $p.textContent = `El factorial de ${$factorial} es: ` + factorial($factorial)

    $div.appendChild($p)

    $resultado.classList.add("mostrarResultado")
    $resultado.appendChild($div)

}

function factorial(numero) {

    if (numero === 0 || numero === 1) {
        return 1
    }
    return numero * factorial((numero - 1));
}



function validarSiEsNumero(val_numero) {
    return Number(val_numero) === val_numero;
}
