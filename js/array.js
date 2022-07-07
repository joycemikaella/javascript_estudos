var numero = [10, 20, 45, 35, 13, 17]

//console.log(numero[2])

numero.push(100)
//numero[numero.lenght] = 100
/*
for (let i = 0; i < numero.lenght; i++) {
    console.log(numero[i])

}*/

console.log(numero.toString())

numero.shift() //remove do inicio
console.log(numero.toString())

numero.unshift(350) //adiciona do inicio
console.log(numero.toString())
