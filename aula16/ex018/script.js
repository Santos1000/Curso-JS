let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores =  [] 
function adicionar() {
    if (!inLista(num.value, valores)  && isNumber(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //ADD NÚMEROS DENTRO DA LISTAGEM NO HTML
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //LIMPANDO RESPOSTA
    } else {
        window.alert('eiataaa')
    }
    num.value = ''  // LIMPANDO ELEMENTO DIGITADO 
    num.focus() 
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    } 
}

function isNumber(n) {
    if (Number(n) >=1 && Number(n) <=100) {
        return true
    } else { 
    return false
    }
}

function finalizar() {
    if (valores.length == 0 ) {
        window.alert('Adicione um valor para finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/ tot
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>` // ADD PARAGRAFO +=
        res.innerHTML += `<p> O maior valor é  ${maior}.</p>`
        res.innerHTML += `<p> O menor valor é  ${menor}.</p>`
        res.innerHTML += `<p> A soma de todos os valores é  ${soma}.</p>`
        res.innerHTML += `<p> A média de todos os valores é  ${media}.</p>`
    }
}