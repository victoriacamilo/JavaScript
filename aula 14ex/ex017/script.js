function Calcular(){
    var num= document.getElementById('txtn')
    var Tabu= document.getElementById('seletab')
    
    if(num.value.length == 0){
   alert('Por favor, digite um número')
    } else {
        var n=Number (num.value)
        var c= 1
        Tabu.innerHTML= ''
        while (c <= 10){
        var item= document.createElement('option')
        item.text=`${n} x ${c} = ${n*c}`
        Tabu.appendChild(item)
        c++
        }
    }
}