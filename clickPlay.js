var count = 0;
var button = document.getElementById("brobutton");
var audio = document.getElementById("aud");
var emoti = document.getElementById("emoticon");
var emoti = document.getElementById("emoticon");


alert("click me\n");

button.onclick = function(){
    count++;
    if(count%2!=0){
    	audio.play();
    	emoti.innerHTML=";)";

    }
    else{
    	audio.pause();
    	emoti.innerHTML="=|";
    }
}