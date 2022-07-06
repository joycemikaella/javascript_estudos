//declarando

function ola() {

    console.log('ola mundo')
    console.log('hello world')
}


//invocando
/*
ola()
ola()
ola()
*/
var numeros = []

function display() {
    console.log("Listando dados do vetor")
    for (let i = 0; i < numeros.length; i++) {
        console.log(`Posição ${i} Valor ${numeros[i]}`)
    }
}
/*
function add() {

    numeros.push(10)
}*/
function add(item) {

    numeros.push(item)
}
/*
console.log(numeros)
add(10)
add(20)
console.log(numeros)*/
display
add(10)
add(20)
add('Maria')
display