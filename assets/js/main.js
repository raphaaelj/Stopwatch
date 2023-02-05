var hh = 0;
var mm = 0;
var ss = 0;
var contador = document.getElementById('contador')

var tempo = 1000;
var cronometro;

function start() {
    cronometro = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cronometro);
}

function stop() {
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;
    contador.innerText = '00:00:00'
}

function timer() {
    ss++;
    if(ss == 60) {
        ss = 0;
        mm++;
        
        if(mm == 60) {
            mm = 0;
            hh++;
        }
    }


    formato = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    contador.innerText = formato;
}