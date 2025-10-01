

let numero = '65542'

while (parseInt(numero) > 10) {
    let soma = 0
    numero.split('').forEach ( (n) => {
        soma += parseInt(n)
    })
    numero = soma.toString()
}

console.log( (numero / 3)*numero == 3 )

