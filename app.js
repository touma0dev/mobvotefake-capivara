const open =document.getElementById('open')
const play =document.getElementById('audio')

open.addEventListener('click',function (e) {
    var p =document.querySelector('ul')
    var classe='change';
    if ( p.classList.contains(classe) ){
    p.classList.remove(classe);
    }else{
    p.classList.add(classe)
    }
    
})
var audio = new Audio('assets/5hRuCA3m8JE_48.mp3');

let Play=false;
play.addEventListener('click', function (e) {
    if(Play===true){
        audio.pause();
        audio.currentTime = 0;
        Play=false;
    }else{
        Play=true;
        audio.play()
        return
    }

});
