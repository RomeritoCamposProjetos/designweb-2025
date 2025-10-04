
// protótipo com as definições de sobrescrita de funções
let quadrado = {
    lado1 : 0,
    lado2 : 0,
    valueOf : function () {
        return this.lado1 * this.lado2;
    },
    toString: function () {
        return `Área: ${this.lado1 * this.lado2}`
    }
}

// passando protótipo de objeto com as descrições dos dados
let quadrado1 = Object.create(quadrado, {
    lado1: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    },
    lado2: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

// passando objeto com as descrições dos dados
let quadrado2 = Object.create(quadrado, {
    lado1: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    },
    lado2: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

console.log(quadrado1.toString())
console.log(quadrado2.toString())

let res = quadrado1 > quadrado2 ? "Quadrado 1 é maior" : "Quadrado 2 é maior"
console.log(res)





