

// protótipo com as definições de sobrescrita de funções
let quadrado = {
    lado1 : 0,
    lado2 : 0,
    valueOf() {
        return this.lado1 * this.lado2;
    },
    toString () {
        return `Área: ${this.lado1 * this.lado2}`
    },
    toJSON () {
        return this.toString();
    }
}


let ponto = Object.create(quadrado)
ponto.lado1 = 10;
ponto.lado2 = 20;

console.log(ponto, ponto.valueOf())