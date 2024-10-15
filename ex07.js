// Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
// Média de Aproveitamento  Conceito
// Entre 9.0 e 10.0             A
// Entre 7.5 e 9.0              B
// Entre 6.0 e 7.5              C
// Entre 4.0 e 6.0              D
// Entre 4.0 e zero             E
// O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let n1 = 10
let n2 = 10
let med = (n1+n2)/2

if(med <4){
    console.log(` Notas N1: ${n1.toFixed(2)} e N2: ${n2.toFixed(2)}\n Media: ${med.toFixed(2)}\n Conceito: E\n Situação: Reprovado`)
}else if(med<6){
    console.log(` Notas N1: ${n1.toFixed(2)} e N2: ${n2.toFixed(2)}\n Media: ${med.toFixed(2)}\n Conceito: D\n Situação: Reprovado`)
}else if(med<7.5){
    console.log(` Notas N1: ${n1.toFixed(2)} e N2: ${n2.toFixed(2)}\n Media: ${med.toFixed(2)}\n Conceito: C\n Situação: Aprovado`)
}else if(med<9){
    console.log(` Notas N1: ${n1.toFixed(2)} e N2: ${n2.toFixed(2)}\n Media: ${med.toFixed(2)}\n Conceito: B\n Situação: Aprovado`)
}else if(med>9){
    console.log(` Notas N1: ${n1.toFixed(2)} e N2: ${n2.toFixed(2)}\n Media: ${med.toFixed(2)}\n Conceito: A\n Situação: Aprovado`)
}