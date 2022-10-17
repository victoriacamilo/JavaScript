function contar(){
    var ini=  document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById ('txtp')
    var res= document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        window.alert('[ERRO] insira os dados')
        res.innerHTML= 'Impossível contar'
    } else{
        res.innerHTML = 'Contando: '
        var i= Number (ini.value)
        var f = Number (fim.value)
        var p= Number (passo.value)
        if(i < f){
            //contagem crescente
        for( var index=i; index <= f; index+=p ){
            res.innerHTML +=`${index} \u{1F449}`
        }  
    } else {
        //contagem regressiva
        for (var index = i ; index >=f; index -=p){
            res.innerHTML += `${index} \u{1F449}`
        }
     }
        res.innerHTML+= `\u{1F3C1}`
    }
}

