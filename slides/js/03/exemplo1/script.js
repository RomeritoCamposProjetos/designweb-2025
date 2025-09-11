
let matriz_tabuleiro = Array(8)
for(let i = 0; i < matriz_tabuleiro.length; i++) {
    matriz_tabuleiro[i] = Array(8);
}

console.log(matriz_tabuleiro)

const EMPTY = 3;
const WHITE = 1;
const BLACK = 2;

const tabuleiro = document.getElementById("tabuleiro")

// construir tabuleiro
for (let i = 0; i < matriz_tabuleiro.length; i++) {

    // adiciona as linhas da tabela
    const row = document.createElement('div')
    row.classList.add(['linha'])
    tabuleiro.appendChild(row)

    for (let j = 0; j < matriz_tabuleiro[i].length; j++) {

        const celula = document.createElement('div')
        celula.classList.add(['celula'])

        // ------------------- bloco --------------------//
        // if (i % 2 == 0) {
        //     // se a linha é par (primeira linha)
        //     let color = j % 2 != 0 ? 'green' : 'white'
        //     celula.classList.add([color]);
        // } else {
        //     let color = j % 2 == 0 ? 'green' : 'white'
        //     celula.classList.add([color]);
        // }
        if ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0)) {
            celula.classList.add('green');
            celula.id = i +" "+ j
            matriz_tabuleiro[i][j] = EMPTY
        } else {
            celula.classList.add('white');
            celula.id = i +" "+ j
        }
        // ------------------- bloco --------------------//

        //inclusão de peças de acordo com as cores
        if (i < 3 && ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0))) {
            const peca = document.createElement('span');
            peca.id = i +"-"+ j;
            peca.classList.add('peca','white');
            celula.appendChild(peca);
            matriz_tabuleiro[i][j] = WHITE
        } else if (i > 4 && ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0))){
            const peca = document.createElement('span');
            peca.id = i +"-"+ j;
            peca.classList.add('peca','black');
            celula.appendChild(peca);
            matriz_tabuleiro[i][j] = BLACK
        }
        row.appendChild(celula)
    }
}

console.log(matriz_tabuleiro)
