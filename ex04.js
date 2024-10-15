//Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

let salario = 280
if(salario<=280){
    let aumento = (salario*20)/100
    let novaSal = salario + aumento
    console.log(`o salario atual é ${salario.toFixed(2)} percentual é de aumento é de 20% com o aumento de ${aumento.toFixed(2)} assim o novo salario é ${novaSal.toFixed(2)}`)
}else if(salario<700){
    let aumento = (salario*15)/100
    let novaSal = salario + aumento
    console.log(`o salario atual é ${salario.toFixed(2)} percentual é de aumento é de 20% com o aumento de ${aumento.toFixed(2)} assim o novo salario é ${novaSal.toFixed(2)}`)
}else if(salario<1500){
    let aumento = (salario*10)/100
    let novaSal = salario + aumento
    console.log(`o salario atual é ${salario.toFixed(2)} percentual é de aumento é de 20% com o aumento de ${aumento.toFixed(2)} assim o novo salario é ${novaSal.toFixed(2)}`)
}else if(salario>1500){
    let aumento = (salario*5)/100
    let novaSal = salario + aumento
    console.log(`o salario atual é ${salario.toFixed(2)} percentual é de aumento é de 20% com o aumento de ${aumento.toFixed(2)} assim o novo salario é ${novaSal.toFixed(2)}`)
}
