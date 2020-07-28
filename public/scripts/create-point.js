//Apresenta os estados 

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(
         (res) => { return res.json() } 
         // Outra maneira: res => res.json()
         )
    .then(states => {
        //Escreverá todas as opções de estados
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">
            ${state.nome}</option>`
        }
    })
}

populateUFs()

//Apresenta as cidades
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value //Captura o id do estado
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = `<option value>Selecione a Cidade</option>`
    citySelect.disabled = true 
    fetch(url)
    .then(
         (res) => { return res.json() } 
         // Outra maneira: res => res.json()
         )
    .then(cities => {
        //Escreverá todas as opções de cidades
        citySelect.innerHTML = ""
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">
            ${city.nome}</option>`
        }

        citySelect.disabled = false
    })
    
}

//Evento após a escolha do estado
document.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")
// Pegará todos os li's
for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem) // Evento click permitirá a mudança no item selecionado
}

//atualiza o campo escondido com os itens selecionados
const collectedItens = document.querySelector("input[name=items]")

let selectedItems = []
function handleSelectedItem(event) {
    //add or remove class with js
    const itemLi = event.target
    const itemid = itemLi.dataset.id
    itemLi.classList.toggle("selected") // Adiciona ou remove a classe selected
    
    //verifica se existem itens selecionados
    //se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemid

        return itemFound
    })
    
    //se já estiver selecionado, remover da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemid
            return itemIsDifferent
        })

        selectedItems = filteredItems
        
    }else{//se não, adicionar à seleção
        selectedItems.push(itemid) //push = adiciona um item no array
    }  
    collectedItens.value = selectedItems
}