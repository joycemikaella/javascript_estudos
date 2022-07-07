function conectar() {

    var x = 2
    try {
        console.log("Abrindo conexão...")

        if (x > 1) {
            throw "Deu problema no teu sql"
        }
    } catch (err) {
        console.log(err)

    } finally {
        console.log("Fechando conexão...")
    }

}

conectar()
