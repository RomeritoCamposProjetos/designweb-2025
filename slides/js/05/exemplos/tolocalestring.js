
// muda o locale para o que está presente no PC (navegador)
let ponto = {
    x: 1000,
    y: 2000,
    toLocaleString: function(){
        return `(${this.x.toLocaleString()},${this.y.toLocaleString()})`;
    }
};

console.log(ponto.toLocaleString())