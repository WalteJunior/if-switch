// Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//Dicas:
//Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
//Triângulo Equilátero: três lados iguais;
//Triângulo Isósceles: quaisquer dois lados iguais;
//Triângulo Escaleno: três lados diferentes;

let l1 = 51
let l2 = 50
let l3 = 5

if(l1==l2 && l2==l3 && l1==l3){
    console.log(`Triângulo Equilátero`)
}else if(l1==l2 || l2==l3 || l1==l3){
    console.log('Triângulo Isósceles')
}else{
    console.log('Triângulo Escaleno')
}