function start() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
c = 1
for(c+=fim; c<=passo; c++) {
    res.innerHTML = `Detectamos ${c} e ${res}.`
}
    