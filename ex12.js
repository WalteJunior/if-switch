// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                     Até 5 Kg            Acima de 5 Kg
// Morango           R$ 2,50 por Kg        R$ 2,20 por Kg
// Maçã              R$ 1,80 por Kg        R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente
let kg = 6
if(kg>5){
    let morango = 2.20*kg
    let maca = 1.50*kg
    let total = morango+maca
    console.log(` ${kg}Kg de morangos custa ${morango.toFixed(2)}\n ${kg}Kg de morangos custa ${maca.toFixed(2)}\n Total: R$ ${total.toFixed(2)}`)
    if(kg>8 || total>25){
        let desconto = (total*10)/100
        console.log(` Desconto especial ativado, novo valor total é de R$ ${desconto.toFixed(2)}`)
    }
}else{
    let morango = 2.50*kg
    let maca = 1.80*kg
    let total = morango+maca
    console.log(` ${kg}Kg de morangos custa ${morango.toFixed(2)}\n ${kg}Kg de morangos custa ${maca.toFixed(2)}\n Total: R$ ${total.toFixed(2)}`)
}