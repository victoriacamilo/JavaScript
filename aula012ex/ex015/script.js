function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 30){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png ')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
            
        } else if (fsex[1].checked){
            gênero = 'Menina/Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 30){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if ( idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}