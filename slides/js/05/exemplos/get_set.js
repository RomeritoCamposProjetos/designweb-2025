

let pessoa = {
    _nome: 'romerito',

    get r() {return this._nome}
}

console.log(pessoa.r)

pessoa._nome = 'jose'

console.log(pessoa.r)

// Por que isso acontece?

// O getter (r) não “trava” o campo _nome.

// Ele apenas expõe uma forma de ler aquele valor.

// Como _nome é uma propriedade pública normal do objeto, qualquer código pode alterar direto.