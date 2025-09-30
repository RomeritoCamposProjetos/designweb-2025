
// objeto que sobrescreve o toString
let a = {
    nome: 'romerito',
    snome: 'jose',
    toString : function () {
        return this.nome
    }
}

// invoca o método toString
console.log("Nome: " + a)