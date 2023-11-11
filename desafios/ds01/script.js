document.body.addEventListener('keyup', (event) => {
   playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
   let song = document.querySelector('#input').ariaValueMax;

   console.log("Musica", song);
});


function playSound(sound) {
   let audioElement = document.querySelector(`#s_${sound}`);
   let keyElement = document.querySelector(`div[data-key="s_${sound}"]`);

   if (audioElement) {
       audioElement.currentTime = 0; // Define o tempo de reprodução para zero
       audioElement.play();
   }

   if (keyElement) {
       keyElement.classList.add('active');

       setTimeout(() => {
           keyElement.classList.remove('active');
       }, 300);
   }
}
