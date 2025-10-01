# Questão – Objetos e DOM

Crie uma página web que permita cadastrar informações de um **livro**.

### Requisitos:

1. O formulário deve ter campos para:

   * **Título**
   * **Autor**
   * **Ano de publicação**

2. Ao clicar em um botão **"Adicionar"**, os dados devem ser usados para criar um **objeto `livro`** no JavaScript com as propriedades correspondentes.

3. O objeto deve conter um **método `descricao()`**, que retorna a string:

   ```
   "O livro [titulo] foi escrito por [autor] em [ano]."
   ```

4. Após o cadastro, o texto retornado por `descricao()` deve ser exibido dentro de uma `<div id="saida">` na página.

### Exemplo esperado no navegador:

Se o usuário digitar:

* Título: *Dom Casmurro*
* Autor: *Machado de Assis*
* Ano: *1899*

Ao clicar em "Adicionar", deve aparecer na tela:

```
O livro Dom Casmurro foi escrito por Machado de Assis em 1899.
```