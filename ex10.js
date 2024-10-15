//Faça um script que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo
let num = 2
if(num<1000){
    let cent = num/100
    let deze = (num%100)/10
    let uni = ((num%100)%10)
    console.log(` o valor ${num} tem:\n centena: ${Math.floor(cent)}\n dezena: ${Math.floor(deze)}\n unidades: ${Math.floor(uni)}`)
}