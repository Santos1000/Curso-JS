function start() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.legth ==0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        } else { //CONTAGEM REGRESSIVA
            for( let c = i; c >=f; c -= p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
/*c = 1
for(c+=fim; c<=passo; c++) {
    res.innerHTML = `Detectamos ${c} e ${res}.`
} let res = document.querySelector('div#res')*/