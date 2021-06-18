let num = [5 ,7 ,8 ,6]
num.push(1)
num[4] = 10
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor decrescene é ${num.sort()}`) // OREDENA E SÓ DEPOIS CONCATENA

let pos = num.indexOf(8)
if (pos == -1) {        // QUANDO NÃO HÁ O NÚMERO NA SEQUENCIA = -1
    console.log('Valor não enontrao.')  
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}