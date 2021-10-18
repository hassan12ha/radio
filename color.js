var color1 = document.getElementById("color-1");
color1.addEventListener("click",()=>{
    select_color("color1");
});
var color2 = document.getElementById("color-2");
color2.addEventListener("click",()=>{
    select_color("color2");
});
var color3 = document.getElementById("color-3");
color3.addEventListener("click",()=>{
    select_color("color3");
});
var color4 = document.getElementById("color-4");
color4.addEventListener("click",()=>{
    select_color("color4");
});

// if(localStorage.getItem("COLOR")==null){
//     document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
// }
select_color(localStorage.getItem("COLOR"));

function select_color(color) {
    if(color=="color1"){
        document.getElementById("cont2").style.background = "rgb(36, 24, 24)";
    }
    else if(color=="color2"){
        document.getElementById("cont2").style.background = "rgb(240, 104, 86)";
    }
    else if(color=="color3"){
        document.getElementById("cont2").style.background = "rgb(22, 115, 190)";
    }
    else if(color=="color4"){
        document.getElementById("cont2").style.background = "rgb(8, 129, 24)";
    }
    localStorage.setItem("COLOR",color);
    
}