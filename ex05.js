// Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. INSS 10%

// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20%

let salBruto = 2000
if(salBruto<=900){
    let inss = (salBruto*10)/100
    let fgts = (salBruto*11)/100
    let salLiq = salBruto - inss
    console.log(` Salario bruto R$ ${salBruto.toFixed(2)}\n INSS R$ ${inss.toFixed(2)}\n FGTS R$ ${fgts.toFixed(2)}\n Total descontos R$ ${descontos.toFixed(2)}\n Salario liquido R$ ${salLiq.toFixed(2)}`)
}else if(salBruto<=1500){
    let inss = (salBruto*10)/100
    let fgts = (salBruto*11)/100
    let ir = (salBruto*5)/100
    let descontos = inss+ir
    let salLiq = salBruto - descontos
    console.log(` Salario bruto R$ ${salBruto.toFixed(2)}\n IR R$ ${ir.toFixed(2)}\n INSS R$ ${inss.toFixed(2)}\n FGTS R$ ${fgts.toFixed(2)}\n Total descontos R$ ${descontos.toFixed(2)}\n Salario liquido R$ ${salLiq.toFixed(2)}`)

}else if(salBruto<=2500){
    let inss = (salBruto*10)/100
    let fgts = (salBruto*11)/100
    let ir = (salBruto*10)/100
    let descontos = inss+ir
    let salLiq = salBruto - descontos
    console.log(` Salario bruto R$ ${salBruto.toFixed(2)}\n IR R$ ${ir.toFixed(2)}\n INSS R$ ${inss.toFixed(2)}\n FGTS R$ ${fgts.toFixed(2)}\n Total descontos R$ ${descontos.toFixed(2)}\n Salario liquido R$ ${salLiq.toFixed(2)}`)

}else if(salBruto>2500){
    let inss = (salBruto*10)/100
    let fgts = (salBruto*11)/100
    let ir = (salBruto*20)/100
    let descontos = inss+ir
    let salLiq = salBruto - descontos
    console.log(` Salario bruto R$ ${salBruto.toFixed(2)}\n IR R$ ${ir.toFixed(2)}\n INSS R$ ${inss.toFixed(2)}\n FGTS R$ ${fgts.toFixed(2)}\n Total descontos R$ ${descontos.toFixed(2)}\n Salario liquido R$ ${salLiq.toFixed(2)}`)

}