var audio_file = document.getElementById("audio_file");
var title_audio = document.getElementById("title_radio");
var play_pause_button = document.getElementById("play_pause");
var isplayed;
function play_pause(){
    if(isplayed == false){
        audio_file.play();
        play_pause_button.src = "./img/pause.png";
        isplayed = true;
    }else{
        audio_file.pause();
        play_pause_button.src = "./img/play.png";
        isplayed = false;
    }
}

play_pause_button.addEventListener("click", ()=>{
    play_pause();
});

   //var names_radio = [];
   var names_radio = Array();
   names_radio[0] = "gym-class";
   names_radio[1] = "hzym";
   names_radio[2] = "the-script-hall";

   var source_audio = Array();
   source_audio[0]= "audio/gym-class.mp3";
   source_audio[1] = "audio/hzym.mp3";
   source_audio[2] = "audio/the-script-hall.mp3";
   var counter = 0;

   setResourse();
   document.getElementById("next").addEventListener("click", ()=>{
       if(counter < source_audio.length-1){
           counter++;
           isplayed = false;
       }else{
           //hena katkolih ila wsalti fin sf charit mab9ach mha9i9e idan rja3e li min 0
           counter = 0;
       }
       localStorage.setItem("SAVE",counter);
       setResourse();

   });
   document.getElementById("back").addEventListener("click", ()=>{
    if(counter > 0){
        counter--;
        isplayed = false;
    }else{
        //hena katkolih ila b9iti katrja3 lore tatwsal 0 sf charit mab9ach mha9i9e idan rja3e li min 3
        counter = source_audio.length-1;
    }
    localStorage.setItem("SAVE",counter);
    setResourse();

});

   function setResourse() {
       if(localStorage.getItem("SAVE") != null){
           counter = localStorage.getItem("SAVE");
       }
       audio_file.src = source_audio[counter];
       title_audio.innerHTML = names_radio[counter];
       play_pause();
       
   }
