// 1. Crea una variable para cada operación aritmética

let sumar = 5 + 5 // Suma
let resta = 5 - 5 // Resta
let multiplicacion = 5 * 5 // Multiplicacion
let division = 5 / 5 // Division
let modulo = 5 % 5 //Modulo  

// 2. Crea una variable para cada tipo de operación de asignación,
// que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = 5
myVariable += 5
console.log(myVariable)

let myTrons = 5
myTrons -= 5
console.log(myTrons)

let myGoku = 5
myGoku *= 5
console.log(myGoku)

let myVegeta = 5
myVegeta /= 5
console.log(myVegeta)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 2);
console.log(10 < 20);
console.log(4 === 4);
console.log(10 <= 10);
console.log(5 >= 5);
console.log(5 !== 3);
console.log('java' == 'java');

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 > 10);
console.log(200 < 100);
console.log(5 === 1);
console.log(1 != 1);
console.log(66 <= 65);

// 5. Utiliza el operador lógico and
console.log(10 > 5 && 5 > 1);
console.log(4 > 6 && 8 > 4);

// 6. Utiliza el operador lógico or
console.log(5 > 10 || 8 > 3);
console.log(10 < 0 || 10 > 6);

// 7. Combina ambos operadores lógicos

console.log(5 > 10 && 22 > 5 || 5 > 1);

// 8. Añade alguna negación

console.log(!(5 > 10 && 22 > 5) || 5 > 1); // true

// 9. Utiliza el operador ternario

const edad = 18;

const resultado = (edad >= 18) ? "Es mayor de edad" : " Es menor de edad";

console.log(resultado);

// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultado2  = (5 + 3 * 2 > 10) && (20 / 4 === 5);

console.log(resultado2);