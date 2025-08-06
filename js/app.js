
let listadeNomes = []

function adicionar() {
    let insertNames = document.getElementById('nome-amigo').value.trim()
    if(insertNames == "") {
        alert('Necessário informar um nome')
        document.getElementById('nome-amigo').value = ''
        return
    } else if (listadeNomes.includes(insertNames)) {
        alert('Não é possível digitar o mesmo nome mais de uma vez')
        document.getElementById('nome-amigo').value = ''
        return
    }

    listadeNomes.push(insertNames)
    document.getElementById('lista-amigos').innerHTML = listadeNomes

    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    let listaNaTela = document.getElementById('lista-sorteio')
  
    if (listadeNomes.length < 3) {
        alert('Necessário ao mínimo 3 pessoas para funcionamento da aplicação')
        return
    }

   shuffle(listadeNomes)

    for (let i = 0; i < listadeNomes.length; i++) {

        if (i == listadeNomes.length - 1) {
            listaNaTela.innerHTML = listaNaTela.innerHTML + `${listadeNomes[i]} ---> ${listadeNomes[0]} <br> `
        } else {
            listaNaTela.innerHTML = listaNaTela.innerHTML + `${listadeNomes[i]} ---> ${listadeNomes[i + 1]} <br> `
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function reiniciar() {
    listadeNomes = []
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}