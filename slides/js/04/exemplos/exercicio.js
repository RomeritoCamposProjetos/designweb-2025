
const OPCAO1 = 'literal'
const OPCAO2 = 'new'
const OPCAO3 = 'create'

let type = null;

let object = null;
function create_obj () {}

const bt_create = document.getElementById('botao_create')
bt_create.addEventListener('click', (event)=>{
    event.preventDefault()

    // type é null - não teve escolha ainda
    if (!type && document.getElementById('tipo').value) {
        type = document.getElementById('tipo').value

        const form = document.getElementById('modo_criacao')
        form.style.display = 'none'    
    
        const form2 =document.getElementById('div_criar')
        form2.style.display = 'flex'

        // cria o objecto com base no type
        create(type)


    } else {
        alert('Opção inválida')
    }

    
    
})

function create (type){
    switch (type) {
        case OPCAO1:
            object = {}
            break;
        case OPCAO2:
            object = new create_obj()
            break;
        case OPCAO3:
            object = Object.create(null)
            break;
        default:
            alert('Opção inválida')
            break;
    }
}

const bt_adicionar = document.getElementById('adicionar')
bt_adicionar.addEventListener('click', (event)=>{
    event.preventDefault()

    let propriedade = document.getElementsByName('propriedade')[0].value
    let data_type = document.getElementById('type').value
    let value = document.getElementById('prop_value').value

    object[propriedade] = cast(data_type, value)

    atualizar ();

})

function atualizar () {

    const div = document.getElementById('div_object')
    div.innerText = JSON.stringify(object);

}

function cast (data_type, value) {
    switch (data_type) {
        case 'number':
            return Number(value)
        case 'boolean':
            return Boolean(value)
        case 'string':
            return String(value)    
        default:
            break;
    }
}


let object = {
    nome: 'romerito',
    number: 100,
    matricula: false
}