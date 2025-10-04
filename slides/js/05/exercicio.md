## Exercício 1 — Deletando Propriedades (DOM + delete)

Crie uma página com:

* Um objeto inicial:

  ```js
  let pessoa = { nome: "Ana", idade: 30, cidade: "Recife" };
  ```
* Um campo de texto onde o usuário digita o nome da propriedade a ser excluída.
* Um botão **"Remover Propriedade"**.
* Ao clicar, use `delete pessoa[prop]` e mostre o objeto atualizado em um `<pre>`.

*Desafio extra:* se a propriedade não existir, exibir uma mensagem “Propriedade inexistente”.

## Exercício 2 — Testando Propriedades

Crie um formulário com:

* Um campo para digitar o nome da propriedade.
* Um botão **"Testar"**.

No clique:

* Verifique se a propriedade existe com `"propriedade" in objeto`.
* Verifique também se é **própria** com `objeto.hasOwnProperty()`.
* Mostre os resultados no DOM (por exemplo, dentro de um `<div id="resultado">`).

## Exercício 3 — Enumerando Propriedades

Dado um objeto:

```js
let aluno = { nome: "Rita", curso: "ADS", periodo: 3 };
```

Mostre no DOM todas as propriedades usando três abordagens:

1. `for...in`
2. `Object.keys()`
3. `Object.getOwnPropertyNames()`

*Desafio:* adicionar um botão **“Mostrar Apenas Próprias”** que use `hasOwnProperty()` dentro do laço.

## Exercício 4 — Estendendo Objetos

Monte uma página com dois campos de texto:

* JSON do objeto de origem
* JSON do objeto de destino

Ao clicar em **“Fundir”**, use `Object.assign(destino, origem)`
e exiba o resultado final.

Mostre o resultado formatado com `JSON.stringify(destino, null, 2)`.

## Exercício 5 — Serializando e Desserializando

Monte uma página onde o usuário pode:

1. Digitar propriedades e valores para montar um objeto (como nos exercícios anteriores).
2. Clicar em **“Salvar (JSON)”** → usar `JSON.stringify()`.
3. Clicar em **“Restaurar (JSON)”** → usar `JSON.parse()`.

Mostre no DOM:

* O texto JSON gerado.
* O objeto reconstruído.

## Exercício 6 — Getters e Setters

Implemente um objeto com propriedades acessoras:

```js
let pessoa = {
  _nome: "",
  get nome() { return this._nome; },
  set nome(n) { this._nome = n.toUpperCase(); }
};
```

No HTML:

* Um input de texto para o nome.
* Um botão “Definir Nome”.
* Um botão “Mostrar Nome”.

Quando clicar em “Definir”, atribua `pessoa.nome = valorDigitado`.
Quando clicar em “Mostrar”, exiba `pessoa.nome` (em caixa alta, automaticamente).

## Exercício 7 — Métodos e Shorthand

Monte uma página com um objeto `retangulo`:

```js
let retangulo = {
  base: 0,
  altura: 0,
  area() {
    return this.base * this.altura;
  }
};
```

Permita ao usuário digitar **base** e **altura**, depois clique em “Calcular Área”
para mostrar o resultado no DOM.

Use a sintaxe curta (sem `function`).

## Exercício 8 — Spread Operator

Crie dois objetos em JSON, `obj1` e `obj2`.
Ao clicar em **“Unir com Spread”**, gerar um novo objeto:

```js
let novo = { ...obj1, ...obj2 };
```

Exibir o resultado no DOM, destacando que propriedades repetidas são sobrescritas pelo segundo objeto.