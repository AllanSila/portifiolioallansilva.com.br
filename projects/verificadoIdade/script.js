function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO - Verifique os dados e tente novamente')   
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bb-homem.jpg')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovem-homem.jpg')

            }else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto-homem.jpg')

            } else {
                //idoso
                img.setAttribute('src','idoso-homem.jpg')

            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bb-mulher.jpg')

            }else if (idade < 21){
                //jovem 
                img.setAttribute('src','jovem-mulher.jpg')

            }else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto-mulher.jpg')

            } else {
                //idoso
                img.setAttribute('src','idoso-mulher.jpg')

            }
        }
        res.innerHTML = `Detectamos que você é ${genero} de ${idade -1} anos`
        res.appendChild(img)
        res.style.textAling= 'center'

    }







}