//var una = prompt("Ingresa 1er numero");
//var dos = prompt("Ingresa 2do numero");
//var tres = parseInt(una) + parseInt(dos);
//console.log(tres);
//alert(tres);

//var usuario = {
// nombre: "Pepe",
//apellido: "Pepito",
//edad: 19,
//aniosexp: 0,
//aniosestu: 2,
//localidad: "Buenos Aires",
//sigueestudiando: true,
//colores: ["negro","amarillo","verde"],
//};
//if (usuario.edad>=18) {
//alert("cumple con los requsisitos");
//} else {
// alert("no cumple con la edad requerida");
//};
//if (usuario.localidad="Buenos Aires") {
// alert("cumple con los requsisitos");
//} else {
//alert("no cumple con la edad requerida");
//};

//if (usuario.sigueestudiando=true) {
// alert("cumple con los requsisitos");
//} else {
//alert("no cumple con la edad requerida");
//};

//if (usuario.aniosestu>=2 || usuario.aniosexp>=2) {
//alert("cumple con los requsisitos");
//} else {
//alert("no cumple con la edad requerida");
//};
//  var lim = prompt("ingrse el limite")
//  var lim2 = parseInt(lim)
// function obtenerSumatoria (){
//     var resultado=0 ;
//     for (i=1; i<=lim2; i++){
//       //  console.log("mi valor es" + i );
//         resultado=resultado + i;
//     }
//     console.log("Mi resultado es " + resultado);
// }
//obtenerSumatoria();
//   function sumaab () {
//      var una = prompt("Ingresa 1er numero");
//      var dos = prompt("Ingresa 2do numero");
//      var tres = parseInt(una) + parseInt(dos);
//      //console.log(tres);
//      alert(tres);
//   }
//  sumaab();
// function concatenar() {
//     var nombre = prompt("Ingresa tu nombre");
//     var text1 = "Hola ";
//     var text2 = " Como estas?";
//     var text3 = text1 + nombre + text2;
//     console.log(text3)
// }
// concatenar()
// function suma (a,b){
//     if (typeof a != "number" || typeof b != "number")(
//         console.log("Mi resultado es, ");
//         console.warn("ingresaste un parametro que no es numero");
//         return NaN; )
//         var resultado = a + b ;


// }




// function concatenarsaludo (nombre, mensaje){
//     var saludo = `Hola,  ${nombre}   ${mensaje}` ;
//     console.log(saludo);
//     return saludo;
// }
// concatenarsaludo("andres","buenos dias");


function realizarCompra(cantidad,precio){
    var resultado = cantidad * precio; 
    if (resultado>1000){
        var descuento = resultado * 0.10; 
        resultado = resultado - descuento;}
        console.log(`mi compra tiene un valor de ${resultado} $` );
        return resultado;

}
realizarCompra(5,400);