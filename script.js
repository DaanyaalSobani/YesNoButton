var yesAudio = new Audio('Audio/yes.mp3');
var noAudio = new Audio('Audio/no.m4a');

function yesFunction() {
    yesAudio.play();
    console.log("Yes button pressed");
}

function noFunction() {
    noAudio.play();
    console.log("No button pressed");
}
