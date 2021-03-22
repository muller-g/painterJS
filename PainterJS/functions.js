var paleta = document.querySelector('input[type="color"]');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var tamanhoPincel = document.querySelector('input[type="number"]');
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 1864.97, 715);

var desenha = false;

function desenhaCirculo(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = paleta.value; // sempre pega o valor atual da paleta!
        pincel.beginPath();
        pincel.arc(x, y, tamanhoPincel.value, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(paleta.value);
    console.log(tamanhoPincel.value);
    console.log(x + ',' + y);
}

tela.onmousemove = desenhaCirculo;

// atribuindo diretamente a função anônima
tela.onmousedown = function() {

    desenha = true;
}

// atribuindo diretamente a função anônima
    tela.onmouseup = function() {

    desenha = false;
}
