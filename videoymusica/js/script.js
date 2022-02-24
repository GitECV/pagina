const video = document.querySelectorAll("video");

function darPlay(id) {
   video[id].play();
}

function darPause(id) {
   video[id].pause();
}

function darStop(id) {
   video[id].currentTime = 0;
   video[id].pause();
}

function darRewind(id) {
   video[id].currentTime = 0;
}