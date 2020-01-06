var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo) {
        this.nombre = "";
        this.equipo = "";
        this.nombreReal = "";
        this.activo = false;
        this.peleasGanadas = 0;
        console.log("se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
    }
    return Avenger;
}());
var hawkeye = new Avenger("Hawkeye", "cap");
console.log(hawkeye);
