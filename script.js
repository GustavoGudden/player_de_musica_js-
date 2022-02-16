let musica = document.querySelector('audio')


musica.addEventListener('timeupdate', atualizar , false);




document.querySelector('.btnplay').addEventListener('click',toca)
document.querySelector('.btnpausa').addEventListener('click',pause)
document.querySelector('.vol').addEventListener('click',volumedim)
document.querySelector('.volau').addEventListener('click',volumeau)
function toca(){
musica.play();
}
function pause(){
musica.pause()
}

function volumedim(){
musica.volume -=0.1
}
function volumeau(){
musica.volume +=0.1
}


function trocamusica(){
    let musica = document.querySelector('audio')
}


function play_evento(){
document.querySelector('.inicio').innerHTML = secToStr( musica.currentTime) ;
document.querySelector('.to').innerHTML = secToStr( musica.duration);
document.querySelector('.ba').max = musica.duration;
document.querySelector('.ba').value = musica.currentTime;
}
function atualizar(){
    document.querySelector('.inicio').innerHTML = secToStr( musica.currentTime);
    document.querySelector('.ba').value = musica.currentTime;
}
function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);
     
    if (horas   < 10)  horas    = "0"+horas;
    if (minutos < 10)  minutos  = "0"+minutos;
    if (segundos < 10) segundos = "0"+segundos;
     
    var tempo    = horas+':'+minutos+':'+segundos;
     
    return tempo;
}