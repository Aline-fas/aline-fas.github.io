

function outcome(){
    
    let numero1 = Number(document.getElementById('num-one').value)
    let numero2 = Number(document.getElementById('num-two').value)
    let total = 0
    
    if(document.getElementById('box1').checked){
        total = numero1 + numero2 
    }else if(document.getElementById('box2').checked){
        total = numero1 - numero2
    }else if(document.getElementById('box3').checked){
        total = numero1 * numero2
    }else{
        total = numero1 / numero2
    }
    document.getElementById('resultArea').innerHTML = 'Result: '+ total
    
}

