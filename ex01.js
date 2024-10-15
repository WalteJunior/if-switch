// Faça um script que leia três números inteiros e mostre o maior deles
let n1 = 5
let n2 = 25
let n3 = 100
let maior

if(n1>n2 && n1>n3){
    maior = n1
}

if(n2>n1 && n2>n3){
    maior = n2
}

if(n3>n1 && n3>n2){
    maior = n3
}
console.log(maior)