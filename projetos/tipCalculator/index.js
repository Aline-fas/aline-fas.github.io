
function formatMoney(value){
    //função para formatar as casas decimais
    //nao necessariamente voce precisa fazer dessa forma no projeto. 
    //da pra fazer direto tambem: variavel.toFixed(2)
    value = Math.ceil(value * 100) / 100  // essa funcao esta sendo usada para arredondar o valor 
    value = value.toFixed(2).replace('.',',') // essa função ta sendo usada para so mostrar 2 casas decimais 
    return value
}


function update(){

    let bill = Number(document.getElementById('yourBill').value)
    let percent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)
    

    // console.log({bill, percent, split})

    let totalSplit = bill * percent / 100 // total de gorjeta
    let splitpp = totalSplit / split // gorjeta por pessoa
    let total = bill + totalSplit // total da conta com gorjeta
    let individual = total / split // quanto cada pessoa vai pagar
   
    // console.log({individual})

    // function formatPeople(value){
    //     if (split === 1) {
    //         return 'uma pessoa'
    //     }else{
    //         return 'mais pessoas'
    //     }
    // }

    document.getElementById('tipPercent').innerHTML = percent +'%' // alterando o percent da barrinha dinamicamente
    document.getElementById('tipValue').innerHTML= formatMoney(totalSplit) 
    document.getElementById('totalWithTip').innerHTML = formatMoney(total) 
    document.getElementById('splitValue').innerHTML = split
    document.getElementById('tipValuepp').innerHTML = formatMoney(splitpp)
    document.getElementById('billEach').innerHTML = 'R$ ' + formatMoney(individual)

}