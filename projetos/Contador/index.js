let number = 0
let exibir = document.getElementById('yourNumber')
// console.log(exibir)

function somar(){
  for (let i = 0; i < 1; i++){
  number = number + 1; 
    if (number >= 0 ){
    // document.body.style
     exibir.style.color = 'black'
    }
  }
  exibir.innerHTML = number
}
function reiniciar() {
  window.location.reload()
}
function subtrair(){
  for (let i = 0; i < 1; i++){
    number = number - 1; 
  
    if (number < 0 ){
      // document.body.style
      exibir.style.color = 'red'
    }
  }
  exibir.innerHTML = number
}