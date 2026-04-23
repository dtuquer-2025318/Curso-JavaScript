// Tipos de datos primitivos

// Cadenas de texto (string)

//name -> Sirve para nombrar productos, nombres, animales, etc y se usa para las funciones
let name = "Denis Tuquer"
//alias -> Sirve para renombrar módulos o partes de ellos al importarlos
let alias = "DenisDev"

// email -> Sirve para nombrar los emails 
let email = "dtuquer-2025318@kinal.edu.gt"

// Números (number)

//La variable (age), sirve para las edades, hora, precio, etc. 
let age = 37 // Entero

//La variable (height), sirve para los decimales.
let height = 1.77 // Decimal

// Booleanos (boolean)

// True -> es un valor booleano, funciona para decir que es verdadero,o está encendido, o es valido o es permitido, etc. 
let isTeacher = true

// False -> es un valor booleano, funciona para decir que es falso, o está apagado, o es invalido o no permitido, etc.
let isStudent = false 

// Undefined
// Undefined -> nos indica que no tiene valor asignado.
let undefinedValue
console.log(undefinedValue)

// Null
// Null -> nos indica que es un valor nulo, que está vacio.
let nullValue = null

// Symbol
// Symbol -> es un valor que siempre es unico, aunque no tenga la misma descripcion.
let mySymbol = Symbol("mysymbol")

// BigInt
// BigInt -> sirve para trabajar con numeros enteros muy grandes.

let myBigInt = BigInt(11231145356346332324235436345423123456789)
let myBigInt2 = 1212123456789123456789123456781234567n

// Mostramos los tipos de datos

//Typeof -> 
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)

