function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove("playing");
}

function playSound(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //for selected key there is no audio then,,,
    if(!audio) return;

    //audio playing and adding the transition effect..
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    //console.log(audio);
    //console.log(key);
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', playSound);