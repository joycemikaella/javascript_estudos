let cadastro = new Promise((sucesso, erro) => {
    let x = 1
    if (x != 0) {
        sucesso("Cadastro realizado com sucesso")
    } else {
        erro("Ocorreu um erro!!")
    }
})

//consumindo promise

cadastro.then(
    /* function (value) {
         console.log(value)
     },
     function (erro) {
 
         console.log(erro)
     }*/
    value => {
        console.log(value)

    },
    erro => {
        console.log(erro)
    }

)