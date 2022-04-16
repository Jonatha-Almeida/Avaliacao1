//Pegando os elementos
const listaElement = document.querySelector('ul')
const pilhaElement = document.querySelector('ol')
const inptElement = document.querySelector('.input')

//Array
const listaList = [];
const pilhaList = [];

//Função para mostra na tela os elementos
function mostraLista(){
    listaElement.innerHTML = '';

    for (const lista of listaList) {
        const elementoLista = document.createElement('li')
        const textoLista = document.createTextNode(lista)

        elementoLista.appendChild(textoLista);
        listaElement.appendChild(elementoLista)
    }

}

//Função para mostra na tela os elementos
function mostraPilha(){
    pilhaElement.innerHTML = '';

    for (const pilha of pilhaList) {
        const elementoPilha = document.createElement('li')
        const textoPilha = document.createTextNode(pilha)

        elementoPilha.appendChild(textoPilha);
        pilhaElement.appendChild(elementoPilha)
    }

}

//Função para INSERIR os elementos
function addLista(){
    const textoLista = inptElement.value
    listaList.push(textoLista)
    inptElement.value = ''
    mostraLista()
}

//Função para INSERIR os elementos
function addPilha(){
    const textoPilha = inptElement.value
    pilhaList.unshift(textoPilha)
    inptElement.value = ''
    mostraPilha()
}

//Funão para pega o checked BOX do usuario e inserir na tela o texto
function displayRadioValue() {
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            console.log(ele[i])
            if(ele[i].value === 'LI')
                addLista()
                //listaList.push(inptElement.value)
                mostraLista()
            if(ele[i].value ==='PI')
                addPilha()
                //pilhaList.unshift(inptElement.value)
                mostraPilha()
        }
    }
}

//document.getElementById('mostra2').innerHTML = pilhaList

