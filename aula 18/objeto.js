var amigo = {nome: 'Victoria',
sexo: 'F',
peso: 64.00 , 
engordar (p=0){
    console.log ( 'engordar')
    this.peso += p 
    // this é autoreferencia ao objeto

}}
amigo.engordar(2)
console.log (`${amigo.nome} pesa ${amigo.peso} kg`)