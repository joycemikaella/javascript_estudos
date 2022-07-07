/*function soma(n1, n2) {
    var resultado
    resultado = n1 + n2
    showResultado(resultado)
    showOutraForma(resultado)

}*/

function showResultado(result) {
    console.log(`O resultado é: ${result}`)
}
function showOutraForma(result) {
    console.log(`O resultado é: ${result}`)

}
function soma(n1, n2, callback) {
    var resultado = n1 + n2
    callback(resultado)
}

soma(10, 20, showResultado)
soma(100, 200, showOutraForma)