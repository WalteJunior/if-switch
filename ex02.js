//Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
let n1 = 15 
let n2 = 110
let n3 = 100
let maior, menor

if(n1>n2 && n1>n3){
    maior = n1
}else if(n1<n2 && n1<n3){
    menor = n1
}

if(n2>n1 && n2>n3){
    maior = n2
}else if(n2<n1 && n2<n3){
    menor = n2
}

if(n3>n1 && n3>n2){
    maior = n3
}else if(n3<n1 && n3<n2){
    menor = n3
}

console.log(maior,menor)