var num= [5,8,9,3]
console.log (`O vetor tem  ${num.length} posições`)

/* PERCURSO EM VETORES
for( var pos=0; pos < num.length; pos++){
    console.log (`Em ordem crescente a posição ${pos}  recebe ${num.sort()[pos]}`)
} 
*/

//DE FORMA SIMPLIFICADA
/*
for( var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
var pos = num.indexOf(8
    )
if( pos ==-1){
    console.log(`O valor não foi encontrado`)
}else {
   console.log(` O valor está na posição ${pos}`)
}

