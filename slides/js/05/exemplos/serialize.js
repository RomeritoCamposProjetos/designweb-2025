// protótipo com as definições de sobrescrita de funções
let quadrado = {
    lado1 : 0,
    lado2 : 0,
    valueOf : function () {
        return this.lado1 * this.lado2;
    },
    toString: function () {
        return `Área: ${this.lado1 * this.lado2}`
    },
    toJSON: function () {
        return this.toString();
    }
}


let ponto = Object.create(quadrado)
ponto.lado1 = 10;
ponto.lado2 = 20;

// serializando um objeto
console.log(JSON.stringify([ponto]))

let abc = {
    nome : 'romerito'
}

console.log(JSON.stringify(abc))

let c = JSON.parse('{"nome":"romerito"}')
console.log(c)
console.log(c.nome)