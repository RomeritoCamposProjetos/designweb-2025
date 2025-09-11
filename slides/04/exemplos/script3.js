

// somar todos os números de 1 a 100
let soma = 0
for(let i=0; i < 100; i++) {
    soma = soma +  (i + 1)
}

console.log(soma)

i = 0
soma = 0
while (i < 100) {
    soma = soma + (i+1)
    i++
}
console.log(soma)


i = 0
soma = 0
do {
    soma = soma + (i+1)
} while (i < 100)

console.log(soma)