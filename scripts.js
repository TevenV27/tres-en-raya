const board = document.getElementById('container');
const btnReset = document.getElementById('reset');
const btns = document.querySelectorAll('.btnBoard');

let counter = 0

board.addEventListener('click', function(event) {
  if (event.target.matches('.btnBoard')) {
    const boton = event.target;
    const botonID = boton.id;
    const btn = document.getElementById(botonID)

    if(counter % 2 === 0 && counter <= 8){
        btn.textContent = 'X'
        btn.style.backgroundColor = '#FF3B11'
        counter++;
    }else if (counter % 2 != 0 && counter <= 8){
        btn.textContent = 'O'
        btn.style.backgroundColor = '#1160FF'
        counter++
    }else{
        alert('El juego ha terminado');
    }
  }
});

btnReset.addEventListener('click',()=>{
    btns.forEach((btn)=>{
        btn.textContent = ''
        btn.style.backgroundColor = '#ffffff'
    })
    counter = 0
})