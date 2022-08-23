// He aquí mi trabajo de eventos. Mil disculpas por la tardanza no he tenido mucho tiempo para poder seguir con el curso.
// En este caso mejoré mi conversor de divisas y le agregué tanto funciones, clase constructora, objetos, arrays, eventos e interaciones con el DOM desde HTML.
// De vuelta muchas gracias por la paciencia y por dejarme enviar el trabajo pasada la fecha estimada. Un saludo =). 


const monedas = {
    dolar: 200,
    euro: 300,
    libra: 400,
}

let montoFinal = 0;
let i = 0;
let resultado = 0;

class divisas {
    constructor(monto, moneda) {
        this.monto = monto
        this.moneda = moneda
    }
    conversion() {
        if (this.moneda == "dolar" && this.monto >= monedas.dolar) {
            montoFinal = this.monto / monedas.dolar;
            resultado = montoFinal.value;
        }
        else if (this.moneda == "euro" && this.monto >= monedas.euro) {
            montoFinal = this.monto / monedas.euro;
            resultado = montoFinal.value;
        }
        else if (this.moneda == "libra" && this.monto >= monedas.libra) {
            montoFinal = this.monto / monedas.libra;
            resultado = montoFinal.value;
        }
        else if (this.monto < monedas.dolar || this.monto < monedas.euro || this.monto < monedas.libra) {
            alert("El monto ingresado es insuficiente, por favor ingrese nuevamente");
        }
    }
}

function CapturarDatos() {
    const moneda = document.getElementById("txtMoneda");
    const monto = document.getElementById("txtMonto");
    const eleccion = moneda.value.toLowerCase();

    const ingreso = new divisas(monto.value, eleccion);
    ingreso.conversion();

    moneda.value = "";
    monto.value = "";

    moneda.focus();
}

function verEstadisticas() {
    const converMon = document.getElementById("lblConversion");
    const valorfinal = montoFinal;
    converMon.innerText = valorfinal;

}