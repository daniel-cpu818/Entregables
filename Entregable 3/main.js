
let continuar = true;
while (continuar) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion.toLowerCase() === "salir") {
        alert("¡Gracias por usar la calculadora! Hasta pronto.");
        continuar = false;
        break;
    }

    function realizarOperacion(num1, num2, operacion) {
        if (operacion === "suma") {
            return num1 + num2;
        } else if (operacion === "resta") {
            return num1 - num2;
        } else if (operacion === "multiplicacion") {
            return num1 * num2;
        } else if (operacion === "division") {

            if (num2 === 0) {
                return "Error: No se puede dividir por cero.";
            }
            return num1 / num2;
        } else {
            return "Error: Operación no válida.";
        }
    }

    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    alert("Resultado: " + resultado);
}
