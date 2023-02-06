let button = document.getElementById('verificaGameButton')
let userNumbers = []; // criando um array para armazenar as tentativas
let displayHtml = document.querySelector('#guesses') // spam onde irei exibir os numeros chutados
let dica = document.querySelector('#textOutput')
let userNumber = document.querySelector('#inputBox')
let attempts9 = 1
let attempts10 = 0
let maxTentativas = 10

//reiniciando a pagina
function newGame() {
    window.location.reload()
}

//Gerando um numero de 0 a 100 e mostrando no console
let computerNumber = Math.floor(Math.random() * 100 + 1)

// carregando as funcoes do jogo ao clicar no botao Enter
document.getElementById("inputBox").addEventListener("keypress", function(button) {
    if (button.key === "Enter") {
      
    // function getNumber(){
        userNumber = Number(document.querySelector('#inputBox').value ) //Numero digitado pelo usuario
        
        //verificando se o usuario digitou um valor entre 1 e 100
        if(userNumber > 100 || userNumber < 1 ){
        dica.innerHTML = '<span id="red">Escolha um número entre 1 e 100</span>'
    }else {
        if (userNumbers.length < maxTentativas ){// se o numero de tentativas for menor que o maximo de tentativas..
            
            //Guardando os numeros digitados pelo usuario
            userNumbers.push(' ' + userNumber)
            displayHtml.innerHTML = userNumbers // exibindo o array para o usuario 

            //dica
            if (userNumber > computerNumber){
                dica.innerHTML ='Chutou alto'
                document.querySelector('#inputBox').value = ""
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
            }else if (userNumber < computerNumber){
                dica.innerHTML ='Chutou baixo'
                document.querySelector('#inputBox').value = ""
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
            }else{
                dica.innerHTML ='PARABÉNS!!! VOCÊ ACERTOU'
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
                document.getElementById('resposta').innerHTML = '<span id="red">O número gerado pelo computador foi:</span>' 
                document.getElementById('resultado').innerHTML = '<span id="red">' + computerNumber + '</span>'
            }
        } else {
            // exibindo o numero gerado apos o limite de erros
            if (userNumbers.length === maxTentativas && userNumber !== computerNumber) {
                document.getElementById('resposta').innerHTML = '<span id="red">O número gerado pelo computador foi:</span>' 
                document.getElementById('resultado').innerHTML = '<span id="red">' + computerNumber + '</span>'
                dica.innerHTML = "Você perdeu :("
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }else {
                
                dica.innerHTML = '<span id="red">Você tem apenas '+ maxTentativas +' tentativas</span>'
                // dica.innerHTML = "Você perdeu :("
            }
            
        }
    }
    

    }
});
  

//carregando as funções do jogo ao clicar no botao 'verificar'
button.addEventListener('click', function(){

    // function getNumber(){
        let userNumber = Number(document.querySelector('#inputBox').value ) //Numero digitado pelo usuario
        
        //verificando se o usuario digitou um valor entre 1 e 100
        if(userNumber > 100 || userNumber < 1 ){
        dica.innerHTML = '<span id="red">Escolha um número entre 1 e 100</span>'
    }else {
        if (userNumbers.length < maxTentativas ){// se o numero de tentativas for menor que o maximo de tentativas..
            
            //Guardando os numeros digitados pelo usuario
            userNumbers.push(' ' + userNumber)
            displayHtml.innerHTML = userNumbers // exibindo o array para o usuario 

            //dica
            if (userNumber > computerNumber){
                dica.innerHTML ='Chutou alto'
                document.querySelector('#inputBox').value = ""
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
            }else if (userNumber < computerNumber){
                dica.innerHTML ='Chutou baixo'
                document.querySelector('#inputBox').value = ""
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
            }else{
                dica.innerHTML ='PARABÉNS!!! VOCÊ ACERTOU'
                attempts9++
                attempts10++
                document.querySelector('#attempts').innerHTML = attempts10 //numero de tentativas
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
                document.getElementById('resposta').innerHTML = '<span id="red">O número gerado pelo computador foi:</span>' 
                document.getElementById('resultado').innerHTML = '<span id="red">' + computerNumber + '</span>'
            }
        } else {
            // exibindo o numero gerado apos o limite de erros
            if (userNumbers.length === maxTentativas && userNumber !== computerNumber) {
                document.getElementById('resposta').innerHTML = '<span id="red">O número gerado pelo computador foi:</span>' 
                document.getElementById('resultado').innerHTML = '<span id="red">' + computerNumber + '</span>'
                dica.innerHTML = "Você perdeu :("
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }else {
                
                dica.innerHTML = '<span id="red">Você tem apenas '+ maxTentativas +' tentativas</span>'
                // dica.innerHTML = "Você perdeu :("
            }
            
        }
    }
    

})