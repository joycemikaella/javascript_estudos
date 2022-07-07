//função anônima

const x = function (n1, n2) {
    var resultado = n1 + n2
    console.log(resultado)
}

x(10, 20)

//arrow function - tira o nome function e fica apenas a =>

//const y = nome => console.log(`Ola ${nome}`)

const y = (nome) => console.log(`Ola ${nome}`)

y('JOYCE')

const z = (n1, n2) => n1 + n2
console.log(z(100, 200))

const w = (n1, n2) => {
    var resultado = n1 + n2
    return resultado
}
console.log(w(2, 2))