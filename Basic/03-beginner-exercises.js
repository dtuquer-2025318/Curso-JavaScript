// 1. Escribe un comentario en una linea

// Hola a todos, mi nombre es: Denis Tuquer.

// 2. Escribe un comentario en varias lineas

/** 
 * Muy buenos días mi nombre es Denis Tuquer
 * Solo paso a saludar, que tengan un bonito viernes
 * y que Dios los bendiga en su día a día.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Number -> variable para imprimir numeros.
let numero = 100;

// String -> Varible para imprimir cadenas de texto.
let texto = "Hola Mundo";

// Boleean -> Variable para imprimir, si es true o false.
let booleano = true;

// Null -> Variable para imprimir un null
let nulo = null;

// Undefined -> Variable para imprimir un indefinido
let indefinido = undefined;

// Symbol -> Variable para imprimir variables que son únicas.
let simbolo = Symbol("id");

//BigInt -> Variable para imprimir números enteros muy grandes.
let numeroGrande = 10000000000000000n;

// 4. Imprime por consola el valor de todas la variables

// Imprime el numero que ingresamos en el Number
console.log(numero)

// Imprime el texto que ingresamos en el String
console.log(texto)

// Imprime el booleano que ingresamos en el Boolean
console.log(booleano)

// Imprime el nulo que ingresamos en el Null
console.log(nulo)

// Imprime el indefinido que ingresamos en el Undefined
console.log(indefinido)

// Imprime el simbolo que ingresamos en el Symbol
console.log(simbolo)

// Imprimer el numeroGrande que ingresamos en el BigInt
console.log(numeroGrande)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof booleano)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof simbolo)
console.log(typeof numeroGrande)

// 6. A contianuación, modifica los valores de las variables por otros del mismo tipo

numero = 20;
texto = "Mundo";
booleano = false;
indefinido = undefined;
nulo = null;
simbolo = Symbol("otroId");
numeroGrande = 121312342313131312n;

// 7. A contianuación, modifica los valores de las variables por otros de distinto tipo

numero = "texto";
texto = 100;
booleano = "true";
indefinido = 50;
nulo = "Ya no es nulo";
simbolo = "Ya no es simbolo"
numeroGrande = "Ya no es numeroGrande"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const numeroConst = 5;
const textoConst = "texto";
const booleanoConst = true;
const nuloConst = null;
const indefinidoConst = undefined
const simboloConst = Symbol("segundoId")
const numeroGrandeConst = 10000n

// 9. A continuación, modifica los valores de las constantes 

//const numeroConst = "texto grande"

// 10. Comenta las lineas que produzcan algún tipo de error al ejecutarse

// console.log(typeof nullo)
// const numeroConst = "texto grande"
// numeroConst = "texto grande"