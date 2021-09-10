const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let player = '';

// rock.addEventListener('click', ()=>{
// const sondClick = new Audio();
//     sondClick.src = './songs/click.mp3';
//     sondClick.volume = 0.70;
// });
//O que faltou fazer - 1.removeEventListener, 2.Contador de vitórias, 3.Sons de click.

rock.addEventListener('click', () =>{
    player = 'Pedra';
    randomNumber();
});
paper.addEventListener('click', ()=>{
    player = 'Papel';
    randomNumber();
});
scissors.addEventListener('click', ()=>{
    player = 'Tesoura';
    randomNumber();
});


function randomNumber(min, max) {
    min = 1;
    max = 3;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    if(result === 1){
        result = 'Pedra'
    }else if(result === 2){
        result = 'Papel'
    }else{
        result = 'Tesoura'
    }
    victory(result)
}


function victory(result){
   
   if(player === 'Pedra' && `${result}` === 'Papel'){
        popupLoser()
   }
   else if(player === 'Pedra' && `${result}` === 'Tesoura'){
       popupWinner()
   }
   else if(player === 'Pedra' && `${result}` === 'Pedra'){
       draw()
   }
   else if(player === 'Papel' && `${result}` === 'Pedra'){
        popupWinner()
   }
   else if(player === 'Papel' && `${result}` === 'Tesoura'){
        popupLoser()
   }
   else if(player === 'Papel' && `${result}` === 'Papel'){
        draw()
   }
   else if(player === 'Tesoura' && `${result}` === 'Pedra'){
        popupLoser()
   }
   else if(player ==='Tesoura' && `${result}` === 'Papel'){
       popupWinner()
   }
   else if(player ==='Tesoura' && `${result}` === 'Tesoura'){
        draw()
   }
}

function popupWinner(){
    const mainBox = document.querySelector('#mainContainer');
    const container = document.createElement('div');
    const container__text = document.createElement('p');
    const container__btn = document.createElement('button');

    container.id = 'winnerBox';
    mainBox.appendChild(container);
    
    container__text.id = 'winnerBox__text';
    container.appendChild(container__text);
    container__text.innerText = `Você jogou ${player}, que ganha de ${result}.`;
    
    container__btn.id = 'winnerBox__btn';
    container__btn.innerText = 'Nova partida!'
    container.appendChild(container__btn);

    container__btn.addEventListener('click', reset = () =>{
        location.reload()
    });

}

function popupLoser(){

    const mainBox = document.querySelector('#mainContainer');
    const container = document.createElement('div');
    const container__text = document.createElement('p');
    const container__btn = document.createElement('button');

    container.id = 'loserBox';
    mainBox.appendChild(container);
    
    container__text.id = 'loserBox__text';
    container.appendChild(container__text);
    container__text.innerText = `Computador jogou ${result}, que ganha de ${player}. `;
    
    container__btn.id = 'loserBox__btn';
    container__btn.innerText = 'Nova partida!'
    container.appendChild(container__btn);
    
    container__btn.addEventListener('click', reset = () =>{
        location.reload()
    });
}

function draw(){
    const mainBox = document.querySelector('#mainContainer');
    const container = document.createElement('div');
    const container__text = document.createElement('p');
    const container__btn = document.createElement('button');

    container.id = 'drawBox';
    mainBox.appendChild(container);
    
    container__text.id = 'drawBox__text';
    container.appendChild(container__text);
    container__text.innerText = 'Empatou!';
    
    container__btn.id = 'drawBox__btn';
    container__btn.innerText = 'Nova partida!'
    container.appendChild(container__btn);

    container__btn.addEventListener('click', reset = () =>{
        location.reload()
    });
}