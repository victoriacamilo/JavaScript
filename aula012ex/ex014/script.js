function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours()
    
    //msg.innerHTML= `Agora são ${hora} horas. Bom dia!`
    if (hora >= 0 && hora <= 12){
        //Bom dia!
        msg.innerHTML= `Agora são ${hora} horas. Bom dia!`
        img.src ='sem título.png'
        document.body.style.background = '#ACB3B9'
    }else if (hora >=13 && hora<= 18){
        //Boa tarde
        msg.innerHTML= `Agora são ${hora} horas. Boa tarde!`
        img.src='tarde.png'
        document.body.style.background = '#FEB757'
    }else {
        //Boa noite
        msg.innerHTML= `Agora são ${hora} horas. Bom Noite!`
        img.src= 'noite.png'
        document.body.style.background = '#1D1D25'
    }
}