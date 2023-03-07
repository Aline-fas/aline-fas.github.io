color = ['red','blue', 'purple','yellow','orange','black','green','pink']

function mudaCor(){
    nameColor = gerarCorAleatoria()
    aleatorio = Math.floor(Math.random() * color.length)
    document.getElementById('yourColor').innerHTML = nameColor
    document.body.style.backgroundColor = nameColor
    //Exibira cor de background com hexa decimal
    
    console.log(nameColor) 
 
}

function gerarCorAleatoria() {
    var letras = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  }