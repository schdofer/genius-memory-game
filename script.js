let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// Cria ordem aleatória de cores
function shuffleOrder() {
    let colorOrder = Math.floor( Math.random() * 4 );
    console.log('Color order', colorOrder);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor
function lightColor(element, number) {
    let time = number + 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, time);

    setTimeout(() => {
        element.classList.remove('selected');
    }, time + 300);
}

// Verifica se os botões criados são os mesmos da ordem aleatória apresentada
function checkOrder() {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        window.alert(`Pontuação: ${score}\nVocê acertou! Iniciando próxima nível.`);
        nextLevel();
    }
}

// Função para verificar o clique do usuário
function click(color) {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// função que retorna a cor
function createColorElement(color) {
    switch(color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

// função que leva para próximo nivel do jogo
function nextLevel() {
    score++;
    shuffleOrder();
}

// função para game over
function gameOver() {
    window.alert(`Game Over! \n----------\n\n Pontuação: ${score}.\n Clique em OK para iniciar novamente.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// inicio do jogo
function playGame() {
    window.alert(`Bem vindo ao Gênius Memory Game! \n\nIniciando novo jogo...`);
    score = 0;

    nextLevel();
}

// eventos de click para selecionar cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

