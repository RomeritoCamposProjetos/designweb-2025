
const OPCAO1 = 'literal'
const OPCAO2 = 'new'
const OPCAO3 = 'create'

let type = null;

const bt_create = document.getElementById('botao_create')
bt_create.addEventListener('click', (event)=>{
    event.preventDefault()

    // type é null - não teve escolha ainda
    if (!type) {
        type = document.getElementById('tipo').value
    }

    const form = document.getElementById('modo_criacao')
    form.style.display = 'none'    
    
    const form2 =document.getElementById('div_criar')
    form2.display = 'flex'

})
