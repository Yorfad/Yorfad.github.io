let array1 = [1, 2, 3]

let array2 = [ array1, 4, 5, 6]

let array3 = [...array1, 4, 5, 6]

const array4 = [ [1, 2], [3, 4], [5, 6]]

console.log(array2)

console.log(array3)

const array8 = []

for(let i = 0; i < array1.length; i++){

    array8[i] =  [...array1]
}

console.log(array8)
function sumar(valor1, valor2, valor3){
    resultado = valor1  + valor2 + valor3;
    console.log(resultado)
}

const array5 = [...array4];
console.log(array5)
const array6 = [...array5];
console.log(array6)
sumar(...array1)
let array10 = [1, 2]
array10[10] = 60;
console.log(array10[10])
console.log(array10)



  