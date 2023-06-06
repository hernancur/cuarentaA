"use strict";

function BinarioADecimal(num) {
  // escriben aca el codigo "num" > "1100"
  var array = num.split("");
  var decimal = 0;
  for (let i = 0; i < array.length; i++) {
    decimal = decimal + array[i] * Math.pow(2, array.length - 1 - i);
    // Alternativas
    // decimal += array[i] * 2 ** (array.length - 1- i)
  }

  return decimal;
}

// console.log("Result>", BinarioADecimal("10110"));

// Binario   "1 0 0 1 "
// //          3 2 1 0
// Potencia   2 2 2 2
// Resultado  8 4 2 1
// Valido     8+0+0+1 = 9

//           3    2    1    0         > BINARIAS
//           <---------------
// Binario ["1", "1", "0", "0"]        .length > 4
//                i
//          ----------------->
//          0     1    2     3        > FOR

// decimal = decimal +        ((((2ELEVO 1  * array[i]))))

function DecimalABinario(num) {
  if (num <= 0) return "Debes ingresar un numero positivo mayor a 0";
  var binario = "11";
  while (num > 0) {
    // binario.unshift(num % 2); // guardo el RESTO EN EL PRINCIPIO
    // si hubieramos usado PUSH deberiamos darle vuelta
    binario = (num % 2) + binario; // Esto funciona SOLO PORQUE LOS STRINGS se concatenan en la COHERCION DE DATOS

    num = Math.floor(num / 2); // num = 13
  }

  // ["1", "1", "0", "1", "1"].join("") > "11011"
  // return binario.join("")  si hicieron arreglo
  return binario;
}

console.log(DecimalABinario(8));

// num 27 % 2 = 1
// num = 27 / 2 > 13,5 > Math.floor(redondea hacia abajo) > Math.trunk(devuelve la parte entera)

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
