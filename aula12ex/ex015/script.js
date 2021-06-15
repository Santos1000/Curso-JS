function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByTagName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >=0 && idade < 10) {
             //baby
             img.setAttribute('rsc', 'babyh.png')
           } else if (idade < 18) {
               //criança
               img.setAttribute('rsc', 'crianh.png')
           } else if (idade < 50) {
               //jvem
               img.setAttribute('rsc', 'jovh.png')
           } else {
               //idoso
               img.setAttribute('rsc', 'idosh.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade < 10) {
            //baby
            img.setAttribute('rsc', 'babym.png')
          } else if (idade < 18) {
              //criança
              img.setAttribute('rsc', 'crianm.png')
          } else if (idade < 50) {
              //jvem
              img.setAttribute('rsc', 'jovm.png')
          } else {
              //idoso
              img.setAttribute('rsc', 'idosm.png')
          }
       }
       res.style.textAling = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
   }
}
