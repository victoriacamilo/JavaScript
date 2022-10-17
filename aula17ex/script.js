var num= document.getElementById ('txtnum')
var lista= document.getElementById('txtn')
var res = document.getElementById ('res')
var valores = []

function isNumero (n) { 
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista (n, l){
    if (l.indexOf (Number (n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    
    if(isNumero(num.value)&& !inLista (num.value, valores)){
        valores.push (Number(num.value))
        var item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML= ''
                
    } else{
        alert('[ERRO] Valor inválido ou já se encontra na lista ')
    }
    //esses dois serve para que no imput após add na lista ele limpe o campo para poder add um novo numero
     num.value = ''
     num.focus()   
    }

    function finalizar(){
        if ( valores.length ==0){
            alert(`Adicione valores`)
        }else {
            var tot=  valores.length // total de elementos
            var maior = valores [0]
            var menor = valores [0]
            var soma= 0
            var media= 0
            for (var pos in valores)
            soma += valores[pos]
            if ( valores [pos] > maior)
                maior = valores [pos]
            if ( valores [pos] < menor)
            menor = valores[pos]
         }
         media = soma / tot
         res.innerHTML = '' //para zerar o valor
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
            res. innerHTML += `<p> O menor valor informado é ${menor}</p>`
            res. innerHTML += `<p> O maior valor informado é ${maior}</p>`
            res.innerHTML += `A soma entre os valores é ${soma} e a média entre eles é ${media}`
        
    }
