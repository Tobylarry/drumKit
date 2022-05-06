
window.addEventListener('keydown', function(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if(!audio) return;
   audio.play();
    key.classList.remove('key')
    key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
        key.classList.add('key')
    },1000);
   console.log(key)
})