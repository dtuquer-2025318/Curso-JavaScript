// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log (myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

// Todos los numeros positviso y negativos menos el cero
// Todas las cadenas de texto menos las vacias 

// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// NaN
// undefined
// El boolean false
// Cadenas de texto vacias

// Operadores lógicos

// and (&&)

// false porque no son mayores que los numeros
console.log(5 > 10 && 15 > 20)

// true porque son menores que los numeros
console.log(5 < 10 && 15 < 20)

// false porque ningun es true
console.log(5 < 10 && 15 > 20 && 30 > 40)

// or (||)

// false porque or toma la primera operación.
console.log(5 > 10 || 15 > 20)

// true ya que la primera operación si cumple.
console.log(5 < 10 || 15 < 20)

// true ya que la primera operación si cumple.
console.log(5 < 10 || 15 > 20)

// false ya que la primera operación no cumple 
console.log(5 > 10 || 15 > 20 || 30 > 40)

// and (&&) es false porque no cumple, pero en or (||) es true porque agarra el que es verdadero y el or (||) si cumple
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)

// El not (!) cancela el true y lo convierte a un false
console.log(!true)

// El not (!) cancela el false y lo convierte a un true
console.log(!false)

// En el and (&&) es false pero el not (!) lo convierte a un true
console.log(!(5 > 10 && 15 > 20))

// En el or (||) es false pero el not (!) lo convierte a un true
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false

// cond ? true : false

// (cond) es la varible y todo lo que este en medio del signo de interrogación (?) y los dos puntos (:) es true (verdadero) y todo lo que este después de los dos puntos (:) es false (falso).
isRaining ?  console.log("Esta lloviendo") : console.log("No está lloviendo")