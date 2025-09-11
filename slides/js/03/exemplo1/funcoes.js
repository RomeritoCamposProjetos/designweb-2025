


// let numero = '65082' 
let numero = '65083'

let num_str = numero.split('')

let soma = 0
for (let i=0; i < num_str.length; i ++) {
    let aux = parseInt(num_str[i])
    soma += aux
}

let resultado = soma % 3 == 0 ? "Divisível" : "Não divisível";

console.log (resultado)