this.audio_file = document.getElementById("audio_file");

var volumee = document.getElementById("volume");
this.audio_file.volume= 50/100;

volumee.addEventListener("change",()=>{
 this.audio_file.volume = volumee.value / 100 ;
});

var speed = document.getElementById("speed");
speed.addEventListener("change",()=>{
    //hena 3alach dirt 100 hite speed dya backRate katkon bin 0 wa 2 idan ladirti 200/100=2
    this.audio_file.playbackRate = speed.value / 100 ;
});