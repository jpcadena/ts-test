class Avenger{
    nombre:string="";
    equipo:string="";
    nombreReal:string="";
    activo:boolean=false;
    peleasGanadas:number=0;

    constructor(nombre:string, equipo:string){
        console.log("se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
    }
}

let hawkeye:Avenger = new Avenger("Hawkeye", "cap");

console.log(hawkeye);