# Exercício – Criando Objetos Dinamicamente com DOM

## Enunciado

Crie uma página web que permita ao usuário **montar dinamicamente um objeto**.

## Requisitos

1. **Forma de criação do objeto**

   * Antes de começar, o usuário deve escolher **como o objeto será criado**.
   * As opções são:

     * **Literal** → `let obj = {};`
     * **Object.create** → `let obj = Object.create(null);`
     * **new Object** → `let obj = new Object();`

   → A escolha pode ser feita por um **select** ou **radio buttons**.

2. **Adicionar propriedades**

   * Um formulário com os seguintes campos:

     * Nome da propriedade (input de texto).
     * Tipo do valor (select: `string`, `number`, `boolean`).
     * Valor da propriedade (input de texto).
     * Botão **"Adicionar"**.

3. **Conversão de tipo**

   * Se o tipo for `number`, converter com `Number(valor)`.
   * Se o tipo for `boolean`, aceitar apenas `"true"` ou `"false"` → converter para `true` ou `false`.
   * Se for `string`, manter o texto.

4. **Exibição do objeto**

   * Cada vez que uma propriedade for adicionada, o objeto atualizado deve ser exibido em uma `<pre>` formatada com `JSON.stringify(obj, null, 2)`.

---

## Exemplo de uso no navegador

Usuário escolhe **"Literal"**.

* Propriedade: `nome`, Tipo: `string`, Valor: `João`.
* Propriedade: `idade`, Tipo: `number`, Valor: `22`.
* Propriedade: `ativo`, Tipo: `boolean`, Valor: `true`.

Resultado exibido:

```json
{
  "nome": "João",
  "idade": 22,
  "ativo": true
}
```