
let pessoa = {
    nome: 'jose'
} 

let aluno = {
    nome: 'jose',
    matricula: 12123,
    curso: 'informática'
}

let pessoa_aluno = {...pessoa, ...aluno}

console.log(pessoa_aluno)
console.log(pessoa_aluno.nome)
console.log(pessoa_aluno.matricula)
console.log(pessoa_aluno.curso)