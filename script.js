// acessando o DOM do meu html, vai procurar e selecionar e foi colocado um identificador entre '[]'
const listContainer = document.querySelector('[data-lists]')
// capturar o formulário
const newListForm = document.querySelector('[data-new-list-form]')
//capturar o que for digitado no formulário
const newListInput = document.querySelector('[data-new-list-input]')


let lists = []
// utilizamos uma função para adicionar eventos em elementos HTML o addEventListener()
// colocamos o evento submit que é o envio do form
// e uma função anônima que recebe o próprio evento
// obs: toda tag form tem um comportamento padrão do navegador, toda vez que recebe um submit a página é atualizada e para prevenir usamos o e.preventDefault()
newListForm.addEventListener('submit', function(e) {
        e.preventDefault()
        //capturando o valor do nosso input, o que for digitado será guardado no lisName
        const listName = newListInput.value

        //feito verificação se caso o input estiver vazio ele interrompa o processo e da o return
        if (listName === null || listName === '') return
        const list = createList(listName)
        //limpe o input toda vez que clicar no botão de enviar
        newListInput.value = null
        lists.push(list)

        //função para mostrar os itens na tela
        render()

})

function createList(name) {
        return {id: Date.now().toString(), name: name }
}

function render() {
        clearElement(listContainer)
        // forEach é um laço de repetição, vai ser usado para percorrer a lista
        lists.forEach(function(list) {
                const item = document.createElement ('Li')
                // vai adicionar a Class na nossa lista de classes
                item.classList.add('item')
                //Aqui ele recupera o item e vai recerber como texto o nosso list
                item.innerText = list.name
                listContainer.appendChild(item)
        })
}

function clearElement(element) {
        while (element.firstChild) {
                element.removeChild(element.firstChild)
        }
}        
        
