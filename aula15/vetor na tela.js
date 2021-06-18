let valores = [8 ,1 ,7 ,4 ,2 ,9 ]
console.log(valores)
for( let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let idade = [13, 22, 60, 10]
console.log(idade)
idade.sort()
for(let key = 0; key < idade.length; key ++) {
    console.log(`A posição ${key} tem o valor ${idade[key]}`)
}

let dia = [22, 5, 23, 14]
console.log(dia)
for(let key in dia) {
    console.log(`A posição ${key} tem o valor ${dia[key]}`)
}

let notas = [22,44,33,22,12]
console.log(notas)
notas.sort()
for(let key in notas) {
    console.log(`A ${key}ª nota é ${notas[key]}`)
}